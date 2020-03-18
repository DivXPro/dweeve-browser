import { XtermKeyhandlerService } from './xterm-keyhandler.service';
import { SplitComponent } from 'angular-split';
import { Component, AfterViewInit, ViewChild, OnInit, HostListener, NgZone, ElementRef } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import * as dwrun from './dweeve/src/exe/dweeve.js';
import * as core from './dweeve/src/functions/core.js';

import { NgTerminal } from 'ng-terminal';
import { ExamplesService } from './examples.service';




declare var Blockly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dweditor', {static: false}) dweditor: AceEditorComponent;
  @ViewChild('pleditor', {static: false}) pleditor: AceEditorComponent;
  @ViewChild('reditor', {static: false}) reditor: AceEditorComponent;
  @ViewChild('rseditor', {static: false}) rseditor: AceEditorComponent;
  @ViewChild('dweditorDiv', {static: false}) dweditorDiv: ElementRef;
  @ViewChild('pleditorDiv', {static: false}) pleditorDiv: ElementRef;
  @ViewChild('reditorDiv', {static: false}) reditorDiv: ElementRef;
  @ViewChild('rseditorDiv', {static: false}) rseditorDiv: ElementRef;
  @ViewChild('vsplit', {static: false}) vsplit: SplitComponent;
  @ViewChild('term', { static: true }) replTerm: NgTerminal;
  @ViewChild('termDiv', {static: false}) termDiv: ElementRef;
  @ViewChild('blocklyDiv', {static: false}) blocklyDivE: ElementRef;

  programName: string;
  program: any;
  workspace: any;

  constructor(private zone: NgZone, private xtermKeys: XtermKeyhandlerService,
              private examples: ExamplesService) {}

  title = 'dweeve-ui';

  public exampleBar = false;
  public resourceNameText = '';
  private winH = 500;
  private splitResizeProgress;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.winH = event.target.innerHeight - 50;
    this.resizeEditors();
  }

  ngOnInit(): void {
    this.winH = window.innerHeight - 80;

    
  }

  public toggleExampleBar() {
    this.exampleBar = !this.exampleBar;
  }

  resizeEditors() {
    let th = 350;
    if (this.splitResizeProgress && this.splitResizeProgress.sizes) {
        th = this.splitResizeProgress.sizes[0];
    }

    this.dweditorDiv.nativeElement.setAttribute('style', 'height:' + (th - 50) + 'px');
    this.pleditorDiv.nativeElement.setAttribute('style', 'height:' + (th - 60) + 'px');
    this.rseditorDiv.nativeElement.setAttribute('style', 'height:' + (th - 123) + 'px');
    this.reditorDiv.nativeElement.setAttribute('style', 'height:' +  (this.winH - th - 150 ) + 'px');
    this.termDiv.nativeElement.setAttribute('style', 'height:' +  (this.winH - th - 150 ) + 'px');

    }

  ngAfterViewInit() {
    const that = this;
    this.vsplit.dragProgress$.subscribe(x => this.zone.run(() =>
    { that.splitResizeProgress = x; window.dispatchEvent(new Event('resize')); } ) );

    this.configureEditor(this.dweditor, 'dweeve');
    this.configureEditor(this.pleditor, 'json');
    this.configureEditor(this.rseditor, 'json');
    
    this.reditor.theme = 'sqlserver';
    this.reditor.mode = 'json';
    this.reditor.getEditor().setOptions({showLineNumbers: true, tabSize: 2 });

    this.toggleExampleBar();
    this.loadExample('Simple function');

    this.xtermKeys.initialiseWithTerminal(this.replTerm, this.replDweeve);

    this.resizeEditors();

  /*  let con = document.getElementById('blocklyDiv');
    let con2 =this.blocklyDivE.nativeElement; 

    this.workspace = Blockly.inject(con2, {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });

    if (this.program.xmlData) {
      this.workspace.clear();
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(this.program.xmlData),
        this.workspace
      );
    } */
  }

  private configureEditor(editor, mode) {
    editor.getEditor().setOptions({ showLineNumbers: true, tabSize: 2 });
    editor.theme = 'textmate';
    editor.mode = mode;
    editor.registerOnChange(() => { this.reDweeve(); });
  }

  replDweeve = (command) => {
      let dwScript = command;
      const dwSplit = this.dweditor.text.split('\n---\n');
      if (dwSplit.length === 2) {
        dwScript = dwSplit[0] + '\n---\n' + dwScript;
      }
      const response =  dwrun.run(dwScript, this.pleditor.text, '', '');

      return response;
  }

  reDweeve() {
    core.setResourceFileContent(this.resourceNameText, this.rseditor.text, 
      (name, content)=> {this.resourceNameText=name; this.rseditor.text = content; });
    this.reditor.text = dwrun.run(this.dweditor.text, this.pleditor.text, '', '');
  }

  public loadExample(name){
    if (this.examples.GetExample(name)) {
      const example = this.examples.GetExample(name);
      this.reditor.text = '';
      this.rseditor.text = example.resourceText !== undefined ? example.resourceText : '';
      this.resourceNameText = example.resourceName !== undefined ? example.resourceName : '';
      this.pleditor.text = example.payload !== undefined ? example.payload : '';
      this.dweditor.text = example.dwl !== undefined ? example.dwl : '';

      this.toggleExampleBar();
    }
  }

  public getResourceFileContent() {
    return Object.keys(core.resourceFileContent);
  }

}

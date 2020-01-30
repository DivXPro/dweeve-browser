import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import * as dwrun from './dweeve/src/exe/dweeve.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dweditor', {static: false}) dweditor: AceEditorComponent;
  @ViewChild('pleditor', {static: false}) pleditor: AceEditorComponent;
  @ViewChild('reditor', {static: false}) reditor: AceEditorComponent;
  title = 'dweeve-ui';

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.dweditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });


    this.dweditor.theme = 'clouds';
    this.dweditor.text = `%dw 2.0
output application/xml
---
{
    prices: payload.prices mapObject (value, key) -> {
        (key): (value + 5)
    }
}`;
    this.dweditor.registerOnChange(() => {
      this.reDweeve();
    });

    this.pleditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.pleditor.theme = 'clouds';
    this.pleditor.text = `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>9.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`;

    this.pleditor.registerOnChange(() => {
      this.reDweeve();
    });

    this.reditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

   
    this.reditor.theme = 'clouds';
    this.reDweeve();

    
  }

  reDweeve() {
    this.reditor.text = dwrun.run(this.dweditor.text, this.pleditor.text, '', '');
  }
}

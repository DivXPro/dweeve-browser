import { Injectable } from '@angular/core';
import { NgTerminal, FunctionsUsingCSI } from 'ng-terminal';

@Injectable({
  providedIn: 'root'
})
export class XtermKeyhandlerService {

  private term : NgTerminal;

  private currentCommand = '';
  private posInCommand = 0;
  private termPrompt = '$ ';
  private commandBuffer = [];
  private commandBufferPos = 0;

  private dweeveCommandCallback;

  constructor() { }

  public initialiseWithTerminal(terminal: NgTerminal, dweeveCommandCallback) {
    this.term = terminal;
    this.dweeveCommandCallback = dweeveCommandCallback;

    this.term.write(this.termPrompt);

    this.term.underlying.textarea.addEventListener('paste',
       (ev) => {this.pasteHandler(ev); } );

    this.term.keyEventInput.subscribe(e => {
      this.keyHandler(e);
    });
  }

  private pasteHandler(ev: ClipboardEvent) {
    const text = ev.clipboardData.getData('Text');
    if (this.posInCommand < this.currentCommand.length) {
      this.term.write(FunctionsUsingCSI.insertBlank(text.length));
    }
    this.term.write(text);
    this.currentCommand = this.currentCommand.substring(0, this.posInCommand) + text
      + this.currentCommand.substring(this.posInCommand, this.currentCommand.length);
    this.posInCommand += text.length;
  }

  private keyHandler(e: { key: string; domEvent: KeyboardEvent; }) {
    console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
    const ev = e.domEvent;
    const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
    if (ev.keyCode === 13) { // enter
      this.keyEnterHandler();
    } else if (ev.keyCode === 35) { // end
      this.keyEndHandler();
    } else if (ev.keyCode === 38) { // up
      this.keyUpHandler();
    } else if (ev.keyCode === 40) { // down
      this.keyDownHandler();
    } else if (ev.keyCode === 39) { // right
      this.keyRightHandler(e);
    } else if (ev.keyCode === 37) { // left
      this.keyLeftHandler(e);
    } else if (ev.keyCode === 46) { // del
      this.keyDelHandler();
    } else if (ev.keyCode === 8) { // back-space
      this.keyDeleteHandler();
    } else if (printable) {
      this.keyDefaultPrintableHandler(e);
    }
  }

  private keyDefaultPrintableHandler(e: { key: string; domEvent: KeyboardEvent; }) {
    if (this.posInCommand < this.currentCommand.length) {
      this.term.write(FunctionsUsingCSI.insertBlank(1));
    }
    this.term.write(e.key);
    this.currentCommand = this.currentCommand.substring(0, this.posInCommand) + e.key
      + this.currentCommand.substring(this.posInCommand, this.currentCommand.length);
    this.posInCommand++;
  }

  private keyEnterHandler() {
    if (this.currentCommand !== '') {
      this.commandBuffer.push(this.currentCommand);
      this.commandBufferPos++;
    }
    const response = this.dweeveCommandCallback(this.currentCommand);
    this.term.write('\r\n' + String(response).replace(/\n/g, '\r\n') + '\r\n' + this.termPrompt);
    this.currentCommand = '';
    this.posInCommand = 0;
  }

  private keyUpHandler() {
    if (this.commandBuffer.length > 0 && this.commandBufferPos > 0) {
      if (this.currentCommand !== '') {
        this.commandBuffer.push(this.currentCommand);
        this.term.write(FunctionsUsingCSI.cursorBackward(this.posInCommand));
        this.term.write(FunctionsUsingCSI.deleteCharacter(this.currentCommand.length));
      }
      this.currentCommand = (this.commandBuffer[--this.commandBufferPos]);
      this.term.write(this.currentCommand);
      this.posInCommand = this.currentCommand.length;
    }
  }

  private keyDownHandler() {
    if (this.currentCommand !== '') {
      this.term.write(FunctionsUsingCSI.cursorBackward(this.posInCommand));
      this.term.write(FunctionsUsingCSI.deleteCharacter(this.currentCommand.length));
    }
    if (this.commandBuffer.length > this.commandBufferPos + 1) {
      this.currentCommand = (this.commandBuffer[++this.commandBufferPos]);
      this.term.write(this.currentCommand);
      this.posInCommand = this.currentCommand.length;
    }
  }

  private keyRightHandler(e: { key: string; domEvent: KeyboardEvent; }) {
    if (this.posInCommand < (this.currentCommand.length)) {
      this.posInCommand++;
      this.term.write(e.key);
    }
  }

  private keyLeftHandler(e: { key: string; domEvent: KeyboardEvent; }) {
    if (this.posInCommand > 0) {
      this.posInCommand--;
      this.term.write(e.key);
    }
  }

  private keyDelHandler() {
    if (this.posInCommand < (this.currentCommand.length - 1)) {
      this.term.write(FunctionsUsingCSI.deleteCharacter(1));
      this.currentCommand = this.currentCommand.substring(0, this.posInCommand)
        + this.currentCommand.substring(this.posInCommand + 1, this.currentCommand.length);
    }
  }

  private keyDeleteHandler() {
    if (this.posInCommand > 0) {
      this.term.write('\b \b' + FunctionsUsingCSI.deleteCharacter(1));
      this.posInCommand--;
      this.currentCommand = this.currentCommand.substring(0, this.posInCommand)
        + this.currentCommand.substring(this.posInCommand + 1, this.currentCommand.length);
    }
  }

  private keyEndHandler() {
    if (this.posInCommand < this.currentCommand.length) {
      this.term.write(FunctionsUsingCSI.cursorForward(this.currentCommand.length - this.posInCommand));
      this.posInCommand = this.currentCommand.length;
    }
  }
}

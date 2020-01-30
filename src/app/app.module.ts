import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AceEditorModule} from 'ng2-ace-editor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {dwrun} from 'dweeve';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

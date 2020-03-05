import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AceEditorModule} from 'ng2-ace-editor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularSplitModule } from 'angular-split';
import { NgTerminalModule } from 'ng-terminal';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularSplitModule.forRoot(),
    AceEditorModule,
    MatTabsModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

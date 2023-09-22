import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmailFormComponent } from './email-reader-form/email-form/email-form.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailReaderFormModule } from './email-reader-form/email-reader-form.module';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EmailReaderFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

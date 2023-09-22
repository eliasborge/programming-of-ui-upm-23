import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailReaderBasicModule } from './email-reader-basic/email-reader-basic.module';
import { EmailFormComponent } from './email-reader-basic/email-form/email-form.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EmailReaderBasicModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

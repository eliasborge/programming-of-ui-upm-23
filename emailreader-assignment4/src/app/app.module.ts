import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmailFormComponent } from './email-reader-form/email-form/email-form.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailReaderFormModule } from './email-reader-form/email-reader-form.module';
import { FilterEmailsPipe } from './pipes/filter-emails.pipe';
import { EmailListComponent } from './email-reader-form/email-list/email-list.component';
import { EmailViewerComponent } from './email-reader-form/email-viewer/email-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterEmailsPipe,
    EmailFormComponent,
    EmailListComponent,
    EmailViewerComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    EmailReaderFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

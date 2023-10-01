import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './email-form/email-form.component';
import { FieldFocusDirective } from '../field-focus.directive';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { EmailListComponent } from './email-list/email-list.component';
import { FormsModule } from '@angular/forms';
import { FilterEmailsPipe } from '../pipes/filter-emails.pipe';



@NgModule({
  declarations: [
    FieldFocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmailReaderFormModule { }

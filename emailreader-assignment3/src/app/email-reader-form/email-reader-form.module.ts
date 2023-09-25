import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './email-form/email-form.component';
import { FieldFocusDirective } from '../field-focus.directive';



@NgModule({
  declarations: [
    FieldFocusDirective
  ],
  imports: [
    CommonModule
  ]
})
export class EmailReaderFormModule { }

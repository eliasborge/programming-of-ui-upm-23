import { Component } from '@angular/core';
import Email from 'src/app/interfaces/Email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent {
  email: Email = { from: '', to: '', subject: '', body: '' };

  sendEmail(): void {
    alert('Sending email: \n' + 
    'From: '+this.email.from +'\n'+ 
    'To: '+this.email.to +'\n'+ 
    'Subject: '+this.email.subject +'\n'+ 
    'Body: '+this.email.body
    );
    this.cleanFields();
  }

  cleanFields(): void {
    this.email = { from: '', to: '', subject: '', body: '' };
  }
}
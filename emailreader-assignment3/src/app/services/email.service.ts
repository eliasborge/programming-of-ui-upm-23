// email.service.ts

import { Injectable } from '@angular/core';
import Email from '../interfaces/Email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emails: Email[] = [
    { id: 1, from: 'sender@example.com', to: 'recipient@example.com', subject: 'Hello', body: 'This is the body of the email.' },
    { id: 2, from: 'sender@example.com', to: 'recipient@example.com', subject: 'Hi', body: 'This is the body of the email.' },
    { id: 3, from: 'sender@example.com', to: 'recipient@example.com', subject: 'Nice to Meet you' },
    { id: 4, from: 'sender@example.com', to: 'recipient@example.com', subject: 'Great!' },
    
  ];

  constructor() {}

  getEmails(): Email[] {
    return this.emails;
  }

  getEmailById(id: number): Email | undefined {
    return this.emails.find((email) => email.id === id);
  }

  addEmail(email: Email): void {
    
    const newId = this.emails.length > 0 ? Math.max(...this.emails.map((email) => email.id)) + 1 : 1;
    email.id = newId;
    this.emails.push(email);
  }

  deleteEmail(id: number): void {
    const index = this.emails.findIndex((email) => email.id === id);
    if (index !== -1) {
      this.emails.splice(index, 1);
    }
  }
}



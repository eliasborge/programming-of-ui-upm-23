import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { FilterEmailsPipe } from 'src/app/pipes/filter-emails.pipe';
import Email from 'src/app/interfaces/Email';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit{
  

  emailList:any[] = [];


  constructor(private emailService: EmailService, private router: Router) {}

  ngOnInit(): void {
    this.emailList = this.emailService.getEmails();
  }

  openEmail(id: number): void {
    this.router.navigate(['email-viewer', id]);
  }

  deleteEmail(id: number): void {
    this.emailService.deleteEmail(id);
    // Update the emailList after deletion
    this.emailList = this.emailService.getEmails();
  }

  newEmail():void{
    this.router.navigate(["email-form"])
  }

}



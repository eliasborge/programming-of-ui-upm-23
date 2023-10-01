import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Email from 'src/app/interfaces/Email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit{


  emailList:Email[] =[]
  email:Email | undefined

  constructor(private emailServivce:EmailService, private route:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.emailList = this.emailServivce.getEmails();
    const emailId = this.route.snapshot.paramMap.get('id');
    if (emailId) {
      this.email = this.emailList.find((email) => email.id === +emailId);

    console.log(emailId)
    console.log(this.email?.to)

  }

}

routeBack():void{
  this.router.navigate(["emails-list"])
}

}

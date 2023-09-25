
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterEmailsPipe } from 'src/app/pipes/filter-emails.pipe';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  emailList: any[] = []; 
  filterText: string = '';
  showEmptyBody: boolean = true;

  constructor(private fb: FormBuilder, private emailService:EmailService, private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      from: ['', [Validators.required, Validators.email]],
      to: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      body: ['']
    });

    this.emailList = this.emailService.getEmails();
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const email = {
        id: 0, //temp id that will be changed later.
        from: this.emailForm.value.from,
        to: this.emailForm.value.to,
        subject: this.emailForm.value.subject,
        body: this.emailForm.value.body
      };

      console.log(this.emailList.length)
      this.emailService.addEmail(email);
      console.log(this.emailList.length)
      this.emailList = this.emailService.getEmails();

      this.cdr.detectChanges();

      
      const message = `The email [${email.subject}] has been sent to [${email.to}]`;
      alert(message);

      
      this.emailForm.reset();
    }
  }

  deleteEmail(id:number):void {
    this.emailService.deleteEmail(id);
    this.emailList = this.emailService.getEmails()
    
    this.cdr.detectChanges();
  }

  resetForm() {
    this.emailForm.reset();
  }




}

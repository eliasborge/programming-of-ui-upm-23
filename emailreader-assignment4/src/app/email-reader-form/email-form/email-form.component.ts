
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
 
  
  constructor(private fb: FormBuilder,  private emailService:EmailService,private router:Router) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      from: ['', [Validators.required, Validators.email]],
      to: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      body: ['']
    });

    
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

     
      this.emailService.addEmail(email);
        
      const message = `The email [${email.subject}] has been sent to [${email.to}]`;
      alert(message);

      
      this.emailForm.reset();
      this.routeBack();
    }
  }

  
  resetForm() {
    this.emailForm.reset();
  }

  routeBack() :void{
    this.router.navigate(["emails-list"])
  }




}

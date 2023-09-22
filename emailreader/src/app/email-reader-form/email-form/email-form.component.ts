
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  emailList: any[] = []; 

  constructor(private fb: FormBuilder) {}

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
        from: this.emailForm.value.from,
        to: this.emailForm.value.to,
        subject: this.emailForm.value.subject
      };

      
      this.emailList.push(email);

      
      const message = `The email [${email.subject}] has been sent to [${email.to}]`;
      alert(message);

      
      this.emailForm.reset();
    }
  }

  resetForm() {
    this.emailForm.reset();
  }

  
}

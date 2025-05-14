import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  onsubmit() {
    if (this.loginForm.valid) {
      alert('Form Submitted!');
    } else {
      alert('Form is invalid');
    }
  }}

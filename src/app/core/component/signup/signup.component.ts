import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IconComponent } from '../icon/icon.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    IconComponent,
    CheckboxModule,
    DividerModule,
    DropdownModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: '../../../../assets/styles/auth.scss',

})
export class SignupComponent implements OnInit {
  userForm!: FormGroup;
  confirm_password: string = '';
  policyChecked: boolean = false;
  rolesList: string[] = ['Freelancer', 'Service Provider', 'Client'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern(/\w{5,255}/)]],
      username: [
        '',
        [Validators.required, Validators.pattern(/[\d\w._]{4,100}/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[\w\d]{8,16}/)]],
      role: ['', Validators.required],
    });
  }
}

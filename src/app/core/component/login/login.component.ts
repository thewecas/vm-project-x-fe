import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IconComponent } from '../icon/icon.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    IconComponent,
    CheckboxModule,
    DividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: '../../../../assets/styles/auth.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberChecked: boolean = false;

  constructor() {
    //load data if its present
    this.fetchAndStoreData();
  }

  handleLogin() {
    if (!this.validData()) {
      return;
    }

    //store the encrypted data if remeber is checked
    this.storeEncryptedData();
  }

  validData() {
    if (!this.username || !this.password) return false;
    else return true;
  }

  storeEncryptedData() {
    const data = {
      user: this.username,
      password: this.password,
    };

    //encrypt the data & store in localstorage
    localStorage.setItem('rememberAuthKey', '');
  }

  fetchAndStoreData() {
    if ('rememberAuthKey' in localStorage) {
      //decrypt the data from localstorage and initialize the form
    }
  }
}

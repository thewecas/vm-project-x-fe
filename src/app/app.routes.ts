import { Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { SignupComponent } from './core/component/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/signup'
  },
  {
    path: 'login',
    component :LoginComponent
  }, {
    path: 'signup',
    component :SignupComponent
  }

];

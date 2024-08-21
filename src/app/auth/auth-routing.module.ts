import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NbAuthComponent } from '@nebular/auth';
import { AuthLoginComponent } from './components/login/authLogin.component';
import { AuthRegisterComponent } from './components/register/authRegister.component';
import { AuthRequestPasswordComponent } from './components/request-password/authRequestPassword.component';
import { AuthResetPasswordComponent } from './components/reset-password/authResetPassword.component';


export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent, // <---
      }, {
        path: 'register',
        component: AuthRegisterComponent, // <---
      },
      {
        path: 'request-password',
        component: AuthRequestPasswordComponent, // <---
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent, // <---
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',

      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
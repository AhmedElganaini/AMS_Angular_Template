import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './components/login/authLogin.component';
import { AuthRegisterComponent } from './components/register/authRegister.component';
import { AuthRequestPasswordComponent } from './components/request-password/authRequestPassword.component';
import { AuthResetPasswordComponent } from './components/reset-password/authResetPassword.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    FileUploadModule,
    NbAuthModule,
    ToastModule,
    TableModule,
    FileUploadModule, 
    ButtonModule, 
     ProgressBarModule, 
     ToastModule, 
     CommonModule,
     BadgeModule,
     CardModule,
     TagModule, 
     RatingModule
  ],
  declarations: [
    // ... here goes our new components
    AuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthRequestPasswordComponent,
    AuthResetPasswordComponent
  ],
})
export class AuthModule {
}
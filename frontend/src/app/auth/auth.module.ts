import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AuthComponent } from './containers/auth/auth.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
     LoginFormComponent,
     RegisterFormComponent,
     QuoteComponent,
     AuthComponent,
     LoginComponent,
     RegisterComponent,
     ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { 

}

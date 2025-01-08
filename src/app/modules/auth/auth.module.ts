import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }

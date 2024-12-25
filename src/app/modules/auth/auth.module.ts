import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    // MatCardModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }

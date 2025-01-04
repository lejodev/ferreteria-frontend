import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseComponent,
    NavbarComponent,
    FooterComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }

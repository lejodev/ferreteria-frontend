import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewSaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class SalesModule { }

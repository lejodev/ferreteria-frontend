import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SalesLayoutComponent } from './components/sales-layout/sales-layout.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TodaySalesComponent } from './components/today-sales/today-sales.component';

@NgModule({
  declarations: [
    NewSaleComponent,
    SalesLayoutComponent,
    NotificationsComponent,
    TodaySalesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class SalesModule { }

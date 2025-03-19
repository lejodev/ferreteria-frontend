import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockLayoutComponent } from './components/stock-layout/stock-layout.component';
import { StockNotificationsComponent } from './components/stock-notifications/stock-notifications.component';
import { BestSellingStockComponent } from './components/best-selling-stock/best-selling-stock.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    StockListComponent,
    StockLayoutComponent,
    StockNotificationsComponent,
    BestSellingStockComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class StockModule { }

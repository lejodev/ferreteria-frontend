import { Component, OnInit } from '@angular/core';
import { StockListService } from '../../services/stock-list/stock-list.service';
import { IStock } from '../../interfaces/stock.interface';
import { map, Subscription, switchMap, timer } from 'rxjs';
import { ISockNotification } from '../../interfaces/stockNotification.interface';

@Component({
  selector: 'app-stock-notifications',
  templateUrl: './stock-notifications.component.html',
  styleUrls: ['./stock-notifications.component.scss']
})
export class StockNotificationsComponent implements OnInit {

  constructor(
    private stockService: StockListService
  ) { }

  stockList: IStock[] = [];
  stockNotifications: ISockNotification[] = [];
  pollingSub!: Subscription

  ngOnInit(): void {

    this.pollingSub = timer(0, 6000).pipe(
      switchMap(() => this.stockService.getAllStock()),
      map((data: IStock[]) => {
        console.log("Exactly!");
        
        this.stockList = data
        return data.filter(stockItem => stockItem.amount < 10).map(stockItem => ({
          ...stockItem,
          message: `Low stock for ${stockItem.products?.name}`,
        }
        ))
      })
    ).subscribe(notificatons => {
      this.stockNotifications = notificatons;
      
    })

  }

  loadStock() {
    const data = this.stockService.getAllStock().subscribe(data => {
      this.stockList = data;
      this.checkStockLevels()
    })

  }

  checkStockLevels(): void {
    const lowStockLevels = this.stockList.filter(stockItem => stockItem.amount < 10);
    this.stockNotifications = lowStockLevels.map(stockItem => ({ ...stockItem, 'message': `Low stock for ${stockItem.products?.name}` }));
    console.log("Low stock levels detected:");
    console.log(this.stockNotifications);
    console.log(lowStockLevels);

  }

  ngOnDestroy() {
    if (this.pollingSub) {
      this.pollingSub.unsubscribe();
      console.log('Unsubscribed!');
      
    }
  }


}

import { Injectable } from '@angular/core';
import { IStock } from '../../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  manageNotifications(stock: IStock[]) {
    const notifications = stock
      .map(stock => {
        if (stock.amount < 100) {
          return {
            id: stock.id,
            message: `${stock.products?.name} is running low`
          };
        }
        return null;
      })
      .filter(notification => notification !== null);

    return notifications
  }
}

import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { IStock } from '../../interfaces/stock.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { StockListService } from '../stock-list/stock-list.service';

@Injectable({
  providedIn: 'root'
})
export class StockDataSourceService implements DataSource<IStock> {

  private stockSubject = new BehaviorSubject<IStock[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private stockService: StockListService) { }

  connect(collectionViewer: CollectionViewer): Observable<IStock[]> {
    return this.stockSubject.asObservable(); // This method let's the data source to be called without the data table knowing where the data is coming from    
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.stockSubject.complete();
    this.loadingSubject.complete();
  }

  loadStock() {
    this.loadingSubject.next(true);

    this.stockService.getAllStock().subscribe((stock) => {
      this.stockSubject.next(stock);
    })

  }

}

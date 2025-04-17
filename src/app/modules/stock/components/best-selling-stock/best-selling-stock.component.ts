import { Component, OnInit } from '@angular/core';
import { IStock } from '../../interfaces/stock.interface';
import { StockListService } from '../../services/stock-list/stock-list.service';

@Component({
  selector: 'app-best-selling-stock',
  templateUrl: './best-selling-stock.component.html',
  styleUrls: ['./best-selling-stock.component.sass']
})
export class BestSellingStockComponent implements OnInit {

  constructor(
    private stock: StockListService
  ) { }

  ngOnInit(): void {

  }

}

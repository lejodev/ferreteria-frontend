import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sales/sale.service';

@Component({
  selector: 'app-today-sales',
  templateUrl: './today-sales.component.html',
  styleUrls: ['./today-sales.component.sass']
})
export class TodaySalesComponent implements OnInit {

  salesToday!: any[]

  constructor(private saleService: SaleService) {

  }

  ngOnInit(): void {
    this.saleService.loadTodaySales().subscribe({
      next: todaySales => {
        console.log(todaySales);
        this.salesToday = todaySales

      }, error: error => {
        console.error(`Error getting today's sales: ${error}`)
      }
    })
  }

}

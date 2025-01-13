import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/modules/sales/services/sales/sale.service';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {

  salesCount: number = 0
  user!: any; // Make it user type

  constructor(
    private salesService: SaleService) { }

  ngOnInit(): void {
    this.loadSalesAmount()
  }

  loadSalesAmount() {
    this.salesService.fetchSalesCount().
      subscribe(salesAmount => {
        this.salesCount = salesAmount
      })
  }

}

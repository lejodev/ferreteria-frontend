import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sales/sale.service';

@Component({
  selector: 'app-sales-layout',
  templateUrl: './sales-layout.component.html',
  styleUrls: ['./sales-layout.component.scss']
})
export class SalesLayoutComponent implements OnInit {

  constructor(private salesService: SaleService) { }

  ngOnInit(): void {
  }



}

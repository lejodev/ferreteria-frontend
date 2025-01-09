import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../interfaces/product.interface';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';
import { Employee } from 'src/app/modules/auth/models/role.model';
import { SaleService } from '../../services/sales/sale.service';
import { ISale } from '../../interfaces/sale.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent implements OnInit {
  products!: IProduct[]
  selectedProduct!: IProduct | null
  quantity: number | null = null;

  // Table required variables
  displayColumn: string[] = ['name', 'quantity', 'price', 'actions']

  private dataSourceSubject = new BehaviorSubject<{ product_id: number, name: string; product_amount: number, price: number }[]>([]);
  dataSource$ = this.dataSourceSubject.asObservable()


  constructor(
    private jwtService: JwtServiceService,
    private productsService: ProductsService,
    private saleService: SaleService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(prods => {
      this.products = prods
      console.table(prods);
    })

  }

  addProduct() {
    if (this.selectedProduct && this.quantity && this.quantity > 0) {
      const currentData = this.dataSourceSubject.getValue() // Gets the behaviorSubject last value
      console.log('currentData', currentData);

      const existingProduct = currentData.find((product) => product.name === this.selectedProduct?.name)
      if (existingProduct) {
        existingProduct.product_amount += this.quantity
        existingProduct.price += this.selectedProduct.sellPrice * this.quantity
      }
      else {
        console.log(this.selectedProduct.name, this.quantity);
        currentData.push({ product_id: this.selectedProduct.id, name: this.selectedProduct.name, product_amount: this.quantity, price: this.selectedProduct.sellPrice * this.quantity })
        // this.
      }
      this.dataSourceSubject.next([...currentData]) // Update the list (binded with layout)
      this.selectedProduct = null
      this.quantity = null
      console.table(currentData);

    } else {
      alert('Please choose a valid amount')
    }
  }

  removeProduct(productIndex: number) {
    const confirmation = confirm("Are you sure you want to remove this product?");
    if (confirmation) {
      const currentData = this.dataSourceSubject.getValue()
      currentData.splice(productIndex, 1)
      this.dataSourceSubject.next([...currentData])
    }
  }

  submitSale() {
    const currentData = this.dataSourceSubject.getValue()
    const decodedToken: Employee = this.jwtService.decodeToken()
    if (!decodedToken) {
      console.error('Error decoding token. Check If token has expired');
      return
    }
    const bodyProducts = currentData.map(({ product_id, product_amount }) => ({ product_id, product_amount }))
    console.log(bodyProducts);

    const body: ISale = {
      id_employee: Number(decodedToken.sub),
      products: [...bodyProducts]
    }

    this.saleService.setSale(body).subscribe({
      next: (resp) => {
        console.log('resp', resp);
        this.dataSourceSubject.next([])
        alert('Sale submitted successfully')
      }, error: (error) => {
        console.log('ERROR', error);
        alert('An erro occurred. Please verify and try again!')
      }
    })

    console.log(body);


  }
}

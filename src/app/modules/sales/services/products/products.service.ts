import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpService) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get('/products')
  }
}

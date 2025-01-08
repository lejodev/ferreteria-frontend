import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ISale } from '../../interfaces/sale.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  token!: string | null

  constructor(
    private http: HttpService,
    private jwtService: JwtServiceService
  ) { 
    this.token = this.jwtService.getToken()
  }



  setSale(saleBody: ISale) {
    console.log(this.token);
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.post('/sale/new', saleBody, headers)
  }

}

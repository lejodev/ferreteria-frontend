import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';
import { IStock } from '../../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  constructor(private http: HttpService, private jwtService: JwtServiceService) { }

  getAllStock(): Observable<IStock[]> {

    const token = this.jwtService.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` })

    return this.http.get('/stock/all', headers)
    // .pipe(
    //   map((res: IStock) => res.products),
    //   catchError((error) => {
    //     console.error('Error fetching stock:', error);
    //     return [];
    //   }))
  }

}

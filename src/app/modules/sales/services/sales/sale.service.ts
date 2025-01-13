import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ISale } from '../../interfaces/sale.interface';
import { HttpHeaders } from '@angular/common/http';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private token: string | null;

  constructor(
    private http: HttpService,
    private jwtService: JwtServiceService
  ) {
    this.token = this.jwtService.getToken();
  }

  /**
   * Creates a new sale
   * @param saleBody - The sale details
   * @returns Observable of the API response
   */
  setSale(saleBody: ISale): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post('/sale/new', saleBody, headers).pipe(
      catchError((error) => {
        console.error('Error creating sale:', error);
        return of({ success: false, error: 'Failed to create sale.' });
      })
    );
  }

  /**
   * Retrieves the user's subject (sub) from the token
   * @returns The user's sub or null if token decoding fails
   */
  getUserSub(): string | null {
    try {
      const user = this.jwtService.decodeToken();
      return user?.sub || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  /**
   * Fetches the count of sales for the current user
   * @returns Observable of the sales count
   */
  fetchSalesCount(): Observable<number> {
    const userSub = this.getUserSub();
    if (!userSub) {
      console.error('User sub is null. Unable to fetch sales.');
      return of(0);
    }

    return this.http.get(`/sale/${userSub}`).pipe(
      map((res: any) => {
        if (Array.isArray(res)) {
          return res.length;
        }
        return 0;
      }),
      catchError((error) => {
        console.error('Error fetching sales count:', error);
        return of(0);
      })
    );
  }

  /**
   * Fetches all sales for the current user
   * @returns Observable of the sales array
   */
  getSalesByUser(): Observable<any[]> {
    const userSub = this.getUserSub();
    if (!userSub) {
      console.error('User sub is null. Unable to fetch sales.');
      return of([]);
    }

    return this.http.get(`/sale/${userSub}`).pipe(
      map((res: any) => {
        if (Array.isArray(res)) {
          return res;
        }
        console.error('Unexpected response format:', res);
        return [];
      }),
      catchError((error) => {
        console.error('Error fetching user sales:', error);
        return of([]);
      })
    );
  }

  loadTodaySales(): Observable<any[]> {
    let todaySales: any[]
    const date = new Date()
    let today = date.toLocaleDateString('en-CA')
    return this.getSalesByUser().pipe(
      map(sales => sales.filter(sale => sale.saleDate === today)),
      catchError(error => {
        console.error('Error loading todays sales', error)
        return of([])
      })
    )
  }
}

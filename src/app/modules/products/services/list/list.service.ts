import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/app/core/services/http/http.service';
import { Iproduct } from 'src/app/modules/dashboard/interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  private _prod: BehaviorSubject<string> = new BehaviorSubject<string>("drill");

  constructor(private http: HttpService) {


  }

  get() {
    return this.http.get<Iproduct[]>('/products')
  }

}

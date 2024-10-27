import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from 'src/app/modules/dashboard/interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  private _prod: BehaviorSubject<string> = new BehaviorSubject<string>("drill");
  private _date: Observable<Date>
  
  constructor() {
    this._date = new Observable(observer => {
      setTimeout(() => {observer.next(new Date())}, 1000)
    })

    
  }

  product = this._prod.asObservable() //return as observable to make it "subscribable"

  set changeProduct(newPrduct: string) {
    this._prod.next(newPrduct)
  }

  get getdate() {
    return this._date
  }

}

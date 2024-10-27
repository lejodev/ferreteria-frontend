import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { SseService } from './Sse/sse.service';
import { Iproduct } from "../interfaces/Iproduct";

@Injectable({
  providedIn: 'root',
})
export class SalesServiceService {
  serverSendEvent!: Observable<any>;
  behaviorSubject: BehaviorSubject<Iproduct>

  constructor(private sseService: SseService, private http: HttpClient) {
    this.behaviorSubject = new BehaviorSubject<any>("perro")
  }

  getEventSource(): Observable<any> {
    let abortController!: AbortController;
    let observable = this.serverSendEvent;

    this.serverSendEvent =
      this.serverSendEvent ||
      new Observable((observer: Observer<any>) => {
        abortController = this.sseService.getEventSource({
          onmessage: (event: any) => {
            observer.next(event);
          },
          onerror: (error: any) => {
            observer.error(error);
          },
        });
        return {
          unsubscribe() {
            abortController.abort();
          },
        };
      });

    return this.serverSendEvent;
  }

  sale(data: any) {
    return this.http.post('http://localhost:3001/sale/new', data)
      .subscribe((res) => { console.log(res) });
  }

}

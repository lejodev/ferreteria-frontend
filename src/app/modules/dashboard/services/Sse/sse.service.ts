import { Injectable } from '@angular/core';
import { fetchEventSource } from '@microsoft/fetch-event-source';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  abortController!: AbortController;

  constructor() {}

  getEventSource(options: any): AbortController {
    // If existing event, terminate it! (avoid event overlapping)
    console.log('Abort controller', this.abortController)
    if (this.abortController) this.abortController.abort();

    // Connect to the sse service

    this.abortController = new AbortController();

    fetchEventSource('http://localhost:3001/sale/sse', options);

    return this.abortController
  }
  
}

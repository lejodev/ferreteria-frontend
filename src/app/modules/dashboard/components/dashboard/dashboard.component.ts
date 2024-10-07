import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from '../../services/sales-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private salesservice: SalesServiceService, http: HttpClient) {}

  ngOnInit(): void {
    console.log('carechimba');
    this.connect();
  }

  connect() {
    this.salesservice.getEventSource().subscribe({
      next: (event) => {
        console.log('Received event:', event);
      },
      error: (error) => {
        console.error('Error receiving event:', error);
        // Additional error handling logic
      },
    });
  }

  execSale() {
    return this.salesservice.sale({body: 'nothing'})
  }
}

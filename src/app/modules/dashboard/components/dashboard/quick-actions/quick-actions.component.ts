import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.sass']
})
export class QuickActionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onClick() {
    this.router.navigate(['/sales']);
  }

}

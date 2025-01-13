import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/modules/auth/models/role.model';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  canManageStock: boolean = false

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const allowedRoles: Employee[] = [Employee.ADMIN, Employee.CHIEF]
    this.canManageStock = this.authService.hasRole(allowedRoles)
    console.log(this.canManageStock);

  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['auth/login'])
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../services/auth/auth.service';
import { Employee } from '../../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data['roles'] as Employee[];
    console.log(requiredRoles);
    
    const token = this.authService.getToken();

    if (this.authService.hasRole(requiredRoles)) {
      return true;

    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }

}

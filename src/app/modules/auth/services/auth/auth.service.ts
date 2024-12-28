import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { LoginResponse } from '../../interfaces/login.interface';
import { RoleType } from '../../models/role.model';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../interfaces/decodedJWTPayload.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: string | null = null

  constructor(private http: HttpService) { }

  login(credentials: any) {
    return this.http.post<LoginResponse>('/auth/login', credentials).pipe(tap((user) => {
      this.currentUser = user.token;
      localStorage.setItem('token', user.token);
    }));

  }

  hasRole(requiredRoles: RoleType[]): boolean {
    if (!this.isLoggedIn()) return false;
    const token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken as JwtPayload;
      if (role.role !== undefined) {
        return requiredRoles.includes(role.role);
      }
    }
    return false;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

}

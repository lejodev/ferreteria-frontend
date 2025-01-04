import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor() { }


  getToken(): string | null {
    return localStorage.getItem("token")

  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {

        return jwtDecode(token);
      }
      catch (error) {
        console.log(error);
        return null
      }
    } return null
  }


}
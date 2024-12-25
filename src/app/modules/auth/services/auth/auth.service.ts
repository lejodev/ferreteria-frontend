import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }


  login(data: any) {
    return this.http.post('auth/login', data);

  }

}

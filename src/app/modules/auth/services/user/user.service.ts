import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  registerUser(user: any) {
    return this.http.post('/users/employee', user)
  }
}

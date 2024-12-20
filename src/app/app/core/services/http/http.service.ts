import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public env = environment

  constructor(private http: HttpClient) { }

  api(endpoint: string) {
    let base: string = this.env.apiBaseUrl;
    return base + endpoint
  }

  get<T>(url: string, params?: HttpParams) {
    console.log("API", this.api(url));

    return this.http.get<T>(this.api(url), { params });
  }

  post<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(this.api(url), body, { headers });
  }

  put<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(this.api(url), body, { headers });
  }

  delete<T>(url: string, headers?: HttpHeaders) {
    return this.http.delete<T>(this.api(url), { headers });
  }

  patch<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.patch<T>(this.api(url), body, { headers });
  }

  head<T>(url: string, headers?: HttpHeaders) {
    return this.http.head<T>(this.api(url), { headers });
  }

  options<T>(url: string, headers?: HttpHeaders) {
    return this.http.options<T>(this.api(url), { headers });
  }

}

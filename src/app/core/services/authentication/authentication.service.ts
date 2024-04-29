import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  API_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  Customerlogin(mail: string, password: string) {
    return this.http.post<any>(this.API_URL + '/login-customer', {
      mail: mail,
      password: password,
    });
  }

  Stafflogin(mail: string, password: string) {
    return this.http.post<any>(this.API_URL + '/login-staff', {
      mail: mail,
      password: password,
    });
  }

  
}

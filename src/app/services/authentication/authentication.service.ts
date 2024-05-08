import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  Customerlogin(mail: string, password: string) {
    return this.http.post<any>('http://localhost:8080/login-customer', {
      mail: mail,
      password: password,
    });
  }

  
  Stafflogin(mail: string, password: string) {
    return this.http.post<any>('http://localhost:8080/login-staff', {
      mail: mail,
      password: password,
    });
  }
  
  CustomerSignup(firstName: string, lastName: string, password: string, phoneNo: string, mail: string) {
    return this.http.post<any>('http://localhost:8080/register-customer', {
      firstName: firstName,
      lastName: lastName,
      password: password,
      phoneNo: phoneNo,
      mail: mail,
    });
  }
}

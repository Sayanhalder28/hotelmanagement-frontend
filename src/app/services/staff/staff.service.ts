import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private HttpClient: HttpClient) {}

  addStaff(data: object) {
    return this.HttpClient.post('http://localhost:8080/register-staff', data);
  }

}

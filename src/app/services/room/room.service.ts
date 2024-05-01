import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private HttpClient: HttpClient) {}

  getAllRooms() {
    return this.HttpClient.get('http://localhost:8080/all-room-details');
  }

  addRoom(data: any) {
    return this.HttpClient.post('http://localhost:8080/add-room', data);
  }
}

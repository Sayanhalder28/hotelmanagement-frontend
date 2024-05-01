import { RoomService } from './../../services/room/room.service';
import { BookingService } from './../../services/booking/booking.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  rooms: any = [];
  checkinDate = '';

  constructor(
    private BookService: BookingService,
    private RoomService: RoomService
  ) {
    this.RoomService.getAllRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  onBooking(roomNo: number) {
    this.BookService.bookRoom(roomNo, this.checkinDate);
  }
}

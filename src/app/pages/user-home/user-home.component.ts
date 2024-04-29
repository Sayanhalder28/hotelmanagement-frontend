import { BookingService } from './../../core/services/booking/booking.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  rooms: any = [
    {
      roomType: 'Single',
      price: 100,
      availability: 5,
      bedCount: 1,
    },
    {
      roomType: 'Double',
      price: 150,
      availability: 5,
      bedCount: 2,
    },
    {
      roomType: 'Family',
      price: 200,
      availability: 5,
      bedCount: 3,
    },
    {
      roomType: 'Single',
      price: 100,
      availability: 5,
      bedCount: 1,
    },
    {
      roomType: 'Double',
      price: 150,
      availability: 5,
      bedCount: 2,
    },
    {
      roomType: 'Family',
      price: 200,
      availability: 5,
      bedCount: 3,
    },
  ];

  constructor(private BookService: BookingService) {}

  onBooking() {
    this.BookService.bookRoom();
  }
}

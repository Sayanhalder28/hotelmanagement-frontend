import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service';

@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css',
})
export class UserBookingsComponent {
  bookings: any[] = [
    { name: 'John Doe', email: 'john@example.com', room: 'Standard Room' },
    { name: 'Jane Smith', email: 'jane@example.com', room: 'Deluxe Room' },
    { name: 'Michael Johnson', email: 'michael@example.com', room: 'Suite' },
  ];

  AllBooking: any = [];
  isStaff: boolean = false;

  constructor(private BookingService: BookingService) {
    const userData = localStorage.getItem('UserData');
    if (userData != null) {
      var userDataJson = JSON.parse(userData);

      this.isStaff = Object.keys(userDataJson).includes('staff_id');
      console.log(this.isStaff);
    }
    this.BookingService.allBooking().subscribe((res: any) => {
      this.AllBooking = res;
      console.log(this.AllBooking);
    });
  }

  onCancelBooking(bookingId: number) {
    this.BookingService.cancelBooking(bookingId);
  }

  onCheckingOut(bookingId: number) {
    this.BookingService.checkOutBooking(bookingId);
  }
  dateFormater(date: any[]) {
    const formated = new Date(date[0], date[1] - 1, date[2], date[3], date[4]);

    return formated;
  }
}

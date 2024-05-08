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
  AllBooking: any = [];
  isStaff: boolean = false;

  constructor(private BookingService: BookingService) {
    const userData = localStorage.getItem('UserData');
    if (userData != null) {
      var userDataJson = JSON.parse(userData);

      this.isStaff = Object.keys(userDataJson).includes('staff_id');
      if (this.isStaff) {
        this.BookingService.allBooking().subscribe((res: any) => {
          this.AllBooking = res;
        });
      } else {
        var customer_id = userDataJson.customer_id;
        this.BookingService.allBooking().subscribe((res: any) => {
          this.AllBooking = res.filter(
            (booking: any) => (booking.customer_id_fk.customer_id = customer_id)
          );
        });
      }
    }
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

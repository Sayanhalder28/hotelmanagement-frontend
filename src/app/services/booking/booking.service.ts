import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  customer_id: number = 0;
  constructor(private HttpClient: HttpClient, private Router: Router) {
    const userData = localStorage.getItem('UserData');
    if (userData != null) {
      this.customer_id = JSON.parse(userData).customer_id;
    }
  }

  bookRoom(roomId: number, check_in_date: string) {
    if (check_in_date.length == 0)
      return alert('Please select a check-in date');
    var body = {
      customerId: this.customer_id,
      roomId: roomId,
      checkInDate: check_in_date,
      isCanceled: false,
    };
    this.HttpClient.post('http://localhost:8080/make-booking', body).subscribe(
      (res: any) => {
        if (res.success) {
          alert(res.message);
          this.Router.navigate(['/user-bookings']);
        } else {
          alert(res.message);
        }
      }
    );
  }

  allBooking() {
    return this.HttpClient.get('http://localhost:8080/all-booking-details');
  }
  cancelBooking(bookingId: number) {
    this.HttpClient.put('http://localhost:8080/cancel-booking', {
      bookingId: bookingId,
    }).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
        location.reload();
      } else {
        alert(res.message);
      }
    });
  }

  checkOutBooking(bookingId: number) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const checkOutDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    this.HttpClient.put('http://localhost:8080/update-checkout', {
      bookingId: bookingId,
      checkOutDate: checkOutDate, // Example check-out date and time
    }).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
        location.reload();
      } else {
        alert(res.message);
      }
    });
  }
}

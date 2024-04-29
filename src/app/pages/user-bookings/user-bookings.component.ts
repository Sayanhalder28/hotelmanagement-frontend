import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}

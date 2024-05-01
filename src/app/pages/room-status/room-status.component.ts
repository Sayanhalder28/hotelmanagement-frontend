import { CommonModule } from '@angular/common';
import { RoomService } from './../../services/room/room.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-status.component.html',
  styleUrl: './room-status.component.css',
})
export class RoomStatusComponent {
  allRooms: any = [];

  constructor(private RoomService: RoomService) {
    this.RoomService.getAllRooms().subscribe((res: any) => {
      this.allRooms = res;
    });
  }
}

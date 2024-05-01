import { RoomService } from './../../services/room/room.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})
export class AddRoomComponent {
  formData: any = {
    staffId: {},
    roomNo: '',
    roomType: '',
    roomStatus: 'Available',
  };

  constructor(private RoomService: RoomService) {
    const userData = localStorage.getItem('UserData');
    if (userData != null) {
      this.formData.staffId = JSON.parse(userData).staff_id;
    }
  }

  onAddRoom() {
    this.RoomService.addRoom(this.formData).subscribe((res: any) => {
      if (res.message)
        alert(res.message);
      else alert('unknown error');
    });
  }
}

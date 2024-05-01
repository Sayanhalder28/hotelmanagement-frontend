import { CommonModule } from '@angular/common';
import { StaffService } from './../../services/staff/staff.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css',
})
export class AddStaffComponent {
  formdata = {
    firstName: '',
    lastName: '',
    password: '',
    mail: '',
    position: '',
  };

  constructor(private StaffService: StaffService) {}

  onAddStaff() {
    this.StaffService.addStaff(this.formdata).subscribe((res: any) => {
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
}

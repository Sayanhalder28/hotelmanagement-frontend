import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  userData: any = {};
  userType: string = 'customer';

  constructor(private Router: Router) {
    const localData = localStorage.getItem('UserData');
    if (localData != null) {
      this.userData = JSON.parse(localData);
      if (Object.keys(this.userData).includes('customer_id'))
        this.userType = 'customer';
      else if (Object.keys(this.userData).includes('staff_id')) {
        if (this.userData.position == 'Manager') this.userType = 'manager';
        else this.userType = 'staff';
      }

      console.log(this.userData.hasO);
    }
  }

  //add on log out function
  onLogOut() {
    localStorage.removeItem('UserData');
    this.Router.navigate(['/login']);
  }
}

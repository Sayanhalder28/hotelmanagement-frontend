import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {


  userData:any = {};

  constructor(private Router: Router) {
    const localData = localStorage.getItem('UserData');
    if (localData != null) {
      this.userData = localData;
    }
  }

  //add on log out function
  onLogOut() {
    localStorage.removeItem('UserData');
    this.Router.navigate(['/login']);
  }
}

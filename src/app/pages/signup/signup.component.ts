import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  formdata = {
    firstName: '',
    lastName: '',
    password: '',
    phoneNo: '',
    mail: '',
  };

  constructor(
    private AuthService: AuthenticationService,
    private Router: Router
  ) {}

  onSignUp() {
    this.AuthService.CustomerSignup(
      this.formdata.firstName,
      this.formdata.lastName,
      this.formdata.password,
      this.formdata.phoneNo,
      this.formdata.mail
    ).subscribe((res) => {
      if (res.success) {
        alert(res.message);
        this.Router.navigateByUrl('/signin');
      } else {
        alert(res.message);
      }
    });
  }
}

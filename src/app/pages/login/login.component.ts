import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // make a object formdata to store the username and password from the html form

  formdata = {
    mail: '',
    password: '',
    role: 'customer',
  };

  constructor(
    private AuthService: AuthenticationService,
    private Router: Router
  ) {}

  onLogin() {
    switch (this.formdata.role) {
      case 'customer':
        this.AuthService.Customerlogin(
          this.formdata.mail,
          this.formdata.password
        ).subscribe((res: any) => {
          if (res.success) {
            alert(res.message);
            localStorage.setItem('UserData', JSON.stringify(res.data));
            this.Router.navigateByUrl('/home');
          } else alert(res.message);
        });
        break;
      case 'staff':
        this.AuthService.Stafflogin(
          this.formdata.mail,
          this.formdata.password
        ).subscribe((res: any) => {
          if (res.success) {
            alert(res.message);
            localStorage.setItem('UserData', JSON.stringify(res.data));
            if (res.data.position == 'manager')
              this.Router.navigateByUrl('/manager');
            else this.Router.navigateByUrl('/staff');
          } else alert(res.message);
        });
        break;
      default:
        alert('Invalid role');
        break;
    }
  }
}

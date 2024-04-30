import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { StaffHomeComponent } from './pages/staff-home/staff-home.component';
import { UserBookingsComponent } from './pages/user-bookings/user-bookings.component';
import { StaffRoomStatusComponent } from './pages/staff-room-status/staff-room-status.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user-home',
        component: UserHomeComponent,
      },
      {
        path: 'user-bookings',
        component: UserBookingsComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'staff-home',
        component: StaffHomeComponent,
      },
      {
        path: 'staff-room-status',
        component: StaffRoomStatusComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin-home',
        component: StaffHomeComponent,
      },
      {
        path: 'admin-room-status',
        component: StaffRoomStatusComponent,
      },
      {
        path: 'admin-add-room',
        component: StaffRoomStatusComponent,
      },
      {
        path: 'admin-add-staff',
        component: StaffRoomStatusComponent,
      },
    ],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

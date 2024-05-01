import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserBookingsComponent } from './pages/user-bookings/user-bookings.component';
import { RoomStatusComponent } from './pages/room-status/room-status.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';

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
        component: RoomStatusComponent,
      },
      {
        path: 'booking-active',
        component: UserBookingsComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin-home',
        component: RoomStatusComponent,
      },
      {
        path: 'admin-add-room',
        component: AddRoomComponent,
      },
      {
        path: 'booking-history',
        component: UserBookingsComponent,
      },
      {
        path: 'admin-add-staff',
        component: AddStaffComponent,
      },
    ],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

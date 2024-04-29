import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRoomStatusComponent } from './staff-room-status.component';

describe('StaffRoomStatusComponent', () => {
  let component: StaffRoomStatusComponent;
  let fixture: ComponentFixture<StaffRoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffRoomStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffRoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

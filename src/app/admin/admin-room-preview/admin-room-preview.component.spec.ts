import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomPreviewComponent } from './admin-room-preview.component';

describe('AdminRoomPreviewComponent', () => {
  let component: AdminRoomPreviewComponent;
  let fixture: ComponentFixture<AdminRoomPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoomPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

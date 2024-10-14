import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsFooterComponent } from './rooms-footer.component';

describe('RoomsFooterComponent', () => {
  let component: RoomsFooterComponent;
  let fixture: ComponentFixture<RoomsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

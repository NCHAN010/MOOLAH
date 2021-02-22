import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoolahuserdetailsComponent } from './moolahuserdetails.component';

describe('MoolahuserdetailsComponent', () => {
  let component: MoolahuserdetailsComponent;
  let fixture: ComponentFixture<MoolahuserdetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoolahuserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoolahuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

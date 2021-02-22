import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoolahuserhomepageComponent } from './moolahuserhomepage.component';

describe('MoolahuserhomepageComponent', () => {
  let component: MoolahuserhomepageComponent;
  let fixture: ComponentFixture<MoolahuserhomepageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoolahuserhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoolahuserhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

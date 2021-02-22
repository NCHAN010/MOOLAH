import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Admincontrol2Component } from './admincontrol2.component';

describe('Admincontrol2Component', () => {
  let component: Admincontrol2Component;
  let fixture: ComponentFixture<Admincontrol2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Admincontrol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admincontrol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

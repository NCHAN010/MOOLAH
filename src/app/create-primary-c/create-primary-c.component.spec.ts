import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatePrimaryCComponent } from './create-primary-c.component';

describe('CreatePrimaryCComponent', () => {
  let component: CreatePrimaryCComponent;
  let fixture: ComponentFixture<CreatePrimaryCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrimaryCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrimaryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

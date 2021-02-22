import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateSecondaryCComponent } from './create-secondary-c.component';

describe('CreateSecondaryCComponent', () => {
  let component: CreateSecondaryCComponent;
  let fixture: ComponentFixture<CreateSecondaryCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSecondaryCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecondaryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

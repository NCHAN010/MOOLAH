import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatePfComponent } from './create-pf.component';

describe('CreatePfComponent', () => {
  let component: CreatePfComponent;
  let fixture: ComponentFixture<CreatePfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

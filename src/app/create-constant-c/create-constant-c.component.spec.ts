import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateConstantCComponent } from './create-constant-c.component';

describe('CreateConstantCComponent', () => {
  let component: CreateConstantCComponent;
  let fixture: ComponentFixture<CreateConstantCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConstantCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConstantCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

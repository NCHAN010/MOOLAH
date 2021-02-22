import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifyPfComponent } from './modify-pf.component';

describe('ModifyPfComponent', () => {
  let component: ModifyPfComponent;
  let fixture: ComponentFixture<ModifyPfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

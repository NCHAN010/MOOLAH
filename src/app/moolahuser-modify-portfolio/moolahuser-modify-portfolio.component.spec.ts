import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoolahuserModifyPortfolioComponent } from './moolahuser-modify-portfolio.component';

describe('MoolahuserModifyPortfolioComponent', () => {
  let component: MoolahuserModifyPortfolioComponent;
  let fixture: ComponentFixture<MoolahuserModifyPortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoolahuserModifyPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoolahuserModifyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

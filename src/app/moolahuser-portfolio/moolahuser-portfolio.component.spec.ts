import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoolahuserPortfolioComponent } from './moolahuser-portfolio.component';

describe('MoolahuserPortfolioComponent', () => {
  let component: MoolahuserPortfolioComponent;
  let fixture: ComponentFixture<MoolahuserPortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoolahuserPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoolahuserPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

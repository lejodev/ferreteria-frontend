import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingStockComponent } from './best-selling-stock.component';

describe('BestSellingStockComponent', () => {
  let component: BestSellingStockComponent;
  let fixture: ComponentFixture<BestSellingStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellingStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

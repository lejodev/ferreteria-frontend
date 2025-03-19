import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLayoutComponent } from './stock-layout.component';

describe('StockLayoutComponent', () => {
  let component: StockLayoutComponent;
  let fixture: ComponentFixture<StockLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

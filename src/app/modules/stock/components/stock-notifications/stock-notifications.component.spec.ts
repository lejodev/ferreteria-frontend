import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNotificationsComponent } from './stock-notifications.component';

describe('StockNotificationsComponent', () => {
  let component: StockNotificationsComponent;
  let fixture: ComponentFixture<StockNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

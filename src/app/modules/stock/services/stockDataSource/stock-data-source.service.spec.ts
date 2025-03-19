import { TestBed } from '@angular/core/testing';

import { StockDataSourceService } from './stock-data-source.service';

describe('StockDataSourceService', () => {
  let service: StockDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

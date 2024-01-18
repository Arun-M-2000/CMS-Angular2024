import { TestBed } from '@angular/core/testing';

import { BillViewModelService } from './bill-view-model.service';

describe('BillViewModelService', () => {
  let service: BillViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

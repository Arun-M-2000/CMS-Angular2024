import { TestBed } from '@angular/core/testing';

import { ConsultBillService } from './consult-bill.service';

describe('ConsultBillService', () => {
  let service: ConsultBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

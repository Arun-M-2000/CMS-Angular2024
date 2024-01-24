import { TestBed } from '@angular/core/testing';

import { PharmacymedicineService } from './pharmacymedicine.service';

describe('PharmacymedicineService', () => {
  let service: PharmacymedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacymedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

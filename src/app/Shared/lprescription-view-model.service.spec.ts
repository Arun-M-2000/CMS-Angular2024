import { TestBed } from '@angular/core/testing';

import { LPrescriptionViewModelService } from './lprescription-view-model.service';

describe('LPrescriptionViewModelService', () => {
  let service: LPrescriptionViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LPrescriptionViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

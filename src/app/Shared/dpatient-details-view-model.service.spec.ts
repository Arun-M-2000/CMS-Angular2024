import { TestBed } from '@angular/core/testing';

import { DPatientDetailsViewModelService } from './dpatient-details-view-model.service';

describe('DPatientDetailsViewModelService', () => {
  let service: DPatientDetailsViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DPatientDetailsViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

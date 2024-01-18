import { TestBed } from '@angular/core/testing';

import { PPatientsMedViewModelService } from './ppatients-med-view-model.service';

describe('PPatientsMedViewModelService', () => {
  let service: PPatientsMedViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PPatientsMedViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

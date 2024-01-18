import { TestBed } from '@angular/core/testing';

import { DDiagnosisViewModelService } from './ddiagnosis-view-model.service';

describe('DDiagnosisViewModelService', () => {
  let service: DDiagnosisViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DDiagnosisViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

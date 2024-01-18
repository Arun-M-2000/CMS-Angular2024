import { TestBed } from '@angular/core/testing';

import { DPatientHistoryViewModelService } from './dpatient-history-view-model.service';

describe('DPatientHistoryViewModelService', () => {
  let service: DPatientHistoryViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DPatientHistoryViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

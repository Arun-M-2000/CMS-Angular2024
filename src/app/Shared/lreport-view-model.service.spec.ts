import { TestBed } from '@angular/core/testing';

import { LReportViewModelService } from './lreport-view-model.service';

describe('LReportViewModelService', () => {
  let service: LReportViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LReportViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

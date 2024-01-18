import { TestBed } from '@angular/core/testing';

import { StaffDetailsViewModelService } from './staff-details-view-model.service';

describe('StaffDetailsViewModelService', () => {
  let service: StaffDetailsViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffDetailsViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

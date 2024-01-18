import { TestBed } from '@angular/core/testing';

import { AppointmentViewModelService } from './appointment-view-model.service';

describe('AppointmentViewModelService', () => {
  let service: AppointmentViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

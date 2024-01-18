import { TestBed } from '@angular/core/testing';

import { DAppointmentViewModelService } from './dappointment-view-model.service';

describe('DAppointmentViewModelService', () => {
  let service: DAppointmentViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DAppointmentViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

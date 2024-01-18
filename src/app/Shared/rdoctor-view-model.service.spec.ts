import { TestBed } from '@angular/core/testing';

import { RDoctorViewModelService } from './rdoctor-view-model.service';

describe('RDoctorViewModelService', () => {
  let service: RDoctorViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RDoctorViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

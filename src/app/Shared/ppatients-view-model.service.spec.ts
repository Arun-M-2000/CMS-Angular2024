import { TestBed } from '@angular/core/testing';

import { PPatientsViewModelService } from './ppatients-view-model.service';

describe('PPatientsViewModelService', () => {
  let service: PPatientsViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PPatientsViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LIDViewModelService } from './lidview-model.service';

describe('LIDViewModelService', () => {
  let service: LIDViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LIDViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataTransService } from './data-trans.service';

describe('DataTransService', () => {
  let service: DataTransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

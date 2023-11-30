import { TestBed } from '@angular/core/testing';

import { NodeConfigService } from './node-config.service';

describe('NodeConfigService', () => {
  let service: NodeConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

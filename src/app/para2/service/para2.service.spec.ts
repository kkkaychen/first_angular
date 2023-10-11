import { TestBed } from '@angular/core/testing';

import { Para2Service } from './para2.service';

describe('Para2Service', () => {
  let service: Para2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Para2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

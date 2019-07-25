import { TestBed } from '@angular/core/testing';

import { GererplatService } from './gererplat.service';

describe('GererplatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GererplatService = TestBed.get(GererplatService);
    expect(service).toBeTruthy();
  });
});

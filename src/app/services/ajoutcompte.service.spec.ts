import { TestBed } from '@angular/core/testing';

import { AjoutcompteService } from './ajoutcompte.service';

describe('AjoutcompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutcompteService = TestBed.get(AjoutcompteService);
    expect(service).toBeTruthy();
  });
});

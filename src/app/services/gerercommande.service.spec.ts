import { TestBed } from '@angular/core/testing';

import { GerercommandeService } from './gerercommande.service';

describe('GerercommandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerercommandeService = TestBed.get(GerercommandeService);
    expect(service).toBeTruthy();
  });
});

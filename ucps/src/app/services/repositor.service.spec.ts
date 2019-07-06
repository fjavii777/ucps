import { TestBed } from '@angular/core/testing';

import { RepositorService } from './repositor.service';

describe('RepositorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositorService = TestBed.get(RepositorService);
    expect(service).toBeTruthy();
  });
});

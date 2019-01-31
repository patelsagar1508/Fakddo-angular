import { TestBed } from '@angular/core/testing';

import { CommoncrudService } from './commoncrud.service';

describe('CommoncrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommoncrudService = TestBed.get(CommoncrudService);
    expect(service).toBeTruthy();
  });
});

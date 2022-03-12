import { TestBed } from '@angular/core/testing';

import { FavoritesTypeService } from './favorites-type.service';

describe('FavoritesTypeService', () => {
  let service: FavoritesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

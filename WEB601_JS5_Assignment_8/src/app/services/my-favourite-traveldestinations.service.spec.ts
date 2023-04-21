import { TestBed } from '@angular/core/testing';

import { MyFavouriteTravelDestinationsService } from './my-favourite-traveldestinations.service';

describe('MyFavouriteTravelDestinationsService', () => {
  let service: MyFavouriteTravelDestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavouriteTravelDestinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

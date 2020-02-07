import { TestBed } from '@angular/core/testing';

import { PostdataService } from './postdata.service';

describe('PostServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostdataService = TestBed.get(PostdataService);
    expect(service).toBeTruthy();
  });
});

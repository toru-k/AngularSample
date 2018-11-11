import { TestBed } from '@angular/core/testing';

import { SampleLibraryService } from './sample-library.service';

describe('SampleLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleLibraryService = TestBed.get(SampleLibraryService);
    expect(service).toBeTruthy();
  });
});

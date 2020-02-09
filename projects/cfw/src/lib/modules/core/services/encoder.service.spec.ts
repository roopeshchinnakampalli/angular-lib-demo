import { TestBed } from '@angular/core/testing';

import { EncoderService } from './encoder.service';

describe('EncoderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncoderService = TestBed.get(EncoderService);
    expect(service).toBeTruthy();
  });
});

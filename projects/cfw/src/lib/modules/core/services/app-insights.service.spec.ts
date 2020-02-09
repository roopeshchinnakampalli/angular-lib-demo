import { TestBed } from '@angular/core/testing';

import { AppInsightsService } from './app-insights.service';
import { ConfigurationService } from './configuration.service';
import { EncoderService } from './encoder.service';

describe('AppInsightsService', () => {
  const fakeConfigurationService = {};
  const fakeEncoderService = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConfigurationService,
          useValue: fakeConfigurationService
        },
        {
          provide: EncoderService,
          useValue: fakeEncoderService
        }
      ]
    })
  );

  it('should be created', () => {
    const service: AppInsightsService = TestBed.get(AppInsightsService);
    expect(service).toBeTruthy();
  });
});

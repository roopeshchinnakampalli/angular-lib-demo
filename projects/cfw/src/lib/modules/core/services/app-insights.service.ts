import { Injectable } from '@angular/core';
import { EncoderService } from './encoder.service';
@Injectable({
  providedIn: 'root'
})
export class AppInsightsService {
  constructor(
    public encoderService: EncoderService
  ) {}
}

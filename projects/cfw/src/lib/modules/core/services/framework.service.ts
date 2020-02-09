import { Injectable, Component, Injector } from '@angular/core';
import { Api } from './api.service';
import { Observable, Subject } from 'rxjs';
import { AppInsightsService } from './app-insights.service';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {
  public menuBack$ = new Subject<any>();

  constructor(
    private api: Api,
    private appInsightsService: AppInsightsService
  ) {}
}

import { TestBed, inject, async } from '@angular/core/testing';
import { Api } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [Api]
    });
  });

  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    }
  ));

  it('should be created', inject([Api], (service: Api) => {
    expect(service).toBeTruthy();
  }));

  it(`should send get request`, async(
    inject([Api], (api: Api) => {
      const obj$ = api.get(
        'https://searchfeeds.worldbank.org/people/bank?format=json&qterm=jim',
        {}
      );
      expect(obj$).not.toBeUndefined();
    })
  ));

  it(`should send post request`, async(
    inject([Api], (api: Api) => {
      const obj$ = api.post(
        'https://3ociscyl67.execute-api.us-east-1.amazonaws.com/dev/postenum?v=2',
        { custom: false }
      );
      expect(obj$).not.toBeUndefined();
    })
  ));

  it(`should send get request for XML`, async(
    inject([Api], (api: Api) => {
      const obj$ = api.delete(
        'https://searchfeeds.worldbank.org/people/bank?format=json&qterm=jim',
        {}
      );
      expect(obj$).not.toBeUndefined();
    })
  ));

  it(`should send patch request for XML`, async(
    inject([Api], (api: Api) => {
      const obj$ = api.patch(
        'https://searchfeeds.worldbank.org/people/bank?format=json&qterm=jim',
        {}
      );
      expect(obj$).not.toBeUndefined();
    })
  ));
});

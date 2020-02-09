import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, httpOptions?: {}): Observable<any> {
    return this.http.get<T>(url, httpOptions);
  }

  public post<T>(url: string, body: any, httpOptions?: {}): Observable<any> {
    return this.http.post<T>(url, body, httpOptions);
  }

  public delete<T>(url: string, httpOptions?: {}): Observable<any> {
    return this.http.delete<T>(url, httpOptions);
  }

  public patch<T>(url: string, body: any, httpOptions?: {}): Observable<any> {
    return this.http.patch<T>(url, body, httpOptions);
  }

  public put<T>(url: string, body: any, httpOptions?: {}): Observable<any> {
    return this.http.put<T>(url, body, httpOptions);
  }
}

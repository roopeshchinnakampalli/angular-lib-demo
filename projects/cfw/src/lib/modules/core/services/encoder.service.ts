import { Injectable } from '@angular/core';
// declare const window: any;
@Injectable({
  providedIn: 'root'
})
export class EncoderService {
  constructor() {}

  encode(value: string) {
    /**
     * As of now, UPI & Email will be encoded using the native Base 64 encoders. If suitable library found this should be replaced with it.
     */
    // return window.btoa(value);
  }
}

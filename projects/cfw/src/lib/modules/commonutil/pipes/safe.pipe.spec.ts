import { SafePipe } from './safe.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafePipe', () => {
  let pipe;

  it('create an instance', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      expect(pipe).toBeTruthy();
    }
  ));

  it('invoke the pipe for html', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform('<html></html>', 'html');
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe for style', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform('text-align:center', 'style');
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe for style', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform('text-align:center', 'style');
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe for script', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform('let name = `bill`', 'script');
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe for url', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform('https://wwww.worldbank.org', 'url');
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe for resourceUrl', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      const returnValue = pipe.transform(
        'https://wwww.worldbank.org',
        'resourceUrl'
      );
      expect(returnValue).toBeTruthy();
    }
  ));

  it('invoke the pipe should throw error for invalid type', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      pipe = new SafePipe(domSanitizer);
      let returnValue;
      try {
        returnValue = pipe.transform('https://wwww.worldbank.org', 'random');
      } catch (e) {
        expect(returnValue).toBeUndefined();
      }
    }
  ));
});

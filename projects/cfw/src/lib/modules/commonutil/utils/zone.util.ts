import { Observer, Observable } from 'rxjs';
import { NgZone } from '@angular/core';

export function enterZone<T>(zone: NgZone) {
    return (source: Observable<T>) => {
      return new Observable((sink: Observer<T>) => {
        return source.subscribe({
          next(x) { zone.run(() => sink.next(x)); },
          error(e) { zone.run(() => sink.error(e)); },
          complete() { zone.run(() => sink.complete()); }
        });
      });
    };
  }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lispCase'
})
export class LispCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? value.replace(/[^A-Z.a-z]+/g, '-').toLowerCase() : '';
  }
}

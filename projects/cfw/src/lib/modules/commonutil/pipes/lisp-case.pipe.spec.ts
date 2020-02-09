import { LispCasePipe } from './lisp-case.pipe';

describe('LispCasePipe', () => {
  it('create an instance', () => {
    const pipe = new LispCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe should return Lisp case', () => {
    const pipe = new LispCasePipe();
    const returnValue = pipe.transform('HelloWorld');
    expect(returnValue).toBeTruthy();
  });

  it('pipe should return Lisp case', () => {
    const pipe = new LispCasePipe();
    const returnValue = pipe.transform(undefined);
    expect(returnValue).toBe('');
  });
});

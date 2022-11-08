import { UppercasePipe } from '../../uppercase.pipe';

describe('UppercasePipe', () => {
  const pipe = new UppercasePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert text to uppercase', () => {
    expect(pipe.transform('aaaa')).toBe('AAAA');
    expect(pipe.transform('aAAa')).toBe('AAAA');
  });
});

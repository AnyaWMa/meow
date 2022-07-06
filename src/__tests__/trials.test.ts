import { myToUpper } from '../trials';

describe('myToUpper', () => {
  it('converts a string to upper case', () => {
    const input = 'test string';

    const expected = 'TEST STRING';

    expect(myToUpper(input)).toEqual(expected);
  });
});

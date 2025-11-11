import { emptyArray } from '../helpers/empty_array.helper';

const testCases = [
  { val: '', ref: false },
  { val: null, ref: false },
  { val: undefined, ref: false },
  { val: [], ref: true },
  { val: {}, ref: false },
  { val: 0, ref: false },
  { val: '0', ref: false },
  { val: 'a', ref: false },
  { val: [0], ref: false },
  { val: { a: 0 }, ref: false },
];

describe('emptyArray', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = emptyArray(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

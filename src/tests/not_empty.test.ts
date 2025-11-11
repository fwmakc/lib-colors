import { notEmpty } from '../helpers/not_empty.helper';

const testCases = [
  { val: '', ref: false },
  { val: null, ref: false },
  { val: undefined, ref: false },
  { val: true, ref: true },
  { val: false, ref: false },
  { val: NaN, ref: false },
  { val: Infinity, ref: true },
  { val: [], ref: true },
  { val: {}, ref: true },
  { val: 0, ref: true },
  { val: '0', ref: true },
  { val: 'a', ref: true },
  { val: [0], ref: true },
  { val: { a: 0 }, ref: true },
];

describe('notEmpty', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmpty(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

import { isEmpty } from '../helpers/is_empty.helper';

const testCases = [
  { val: '', ref: true },
  { val: null, ref: true },
  { val: undefined, ref: true },
  { val: true, ref: false },
  { val: false, ref: true },
  { val: NaN, ref: true },
  { val: Infinity, ref: false },
  { val: [], ref: false },
  { val: {}, ref: false },
  { val: 0, ref: false },
  { val: '0', ref: false },
  { val: 'a', ref: false },
  { val: [0], ref: false },
  { val: { a: 0 }, ref: false },
];

describe('isEmpty', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = isEmpty(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

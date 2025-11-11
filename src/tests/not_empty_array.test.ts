import { notEmptyArray } from '../helpers/not_empty_array.helper';

const testCases = [
  { val: '', ref: false },
  { val: null, ref: false },
  { val: undefined, ref: false },
  { val: [], ref: false },
  { val: {}, ref: false },
  { val: 0, ref: false },
  { val: '0', ref: false },
  { val: 'a', ref: false },
  { val: [0], ref: true },
  { val: { a: 0 }, ref: false },
];

describe('notEmptyArray', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmptyArray(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

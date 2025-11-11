import { emptyObject } from '../helpers/empty_object.helper';

const testCases = [
  { val: '', ref: false },
  { val: null, ref: false },
  { val: undefined, ref: false },
  { val: [], ref: true },
  { val: {}, ref: true },
  { val: 0, ref: false },
  { val: '0', ref: false },
  { val: 'a', ref: false },
  { val: [0], ref: false },
  { val: { a: 0 }, ref: false },
];

describe('emptyObject', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = emptyObject(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

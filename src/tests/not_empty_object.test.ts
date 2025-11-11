import { notEmptyObject } from '../helpers/not_empty_object.helper';

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
  { val: { a: 0 }, ref: true },
];

describe('notEmptyObject', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmptyObject(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});

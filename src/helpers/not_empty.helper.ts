/**
 * Checks if given value is not empty.
 *
 * Value is considered not empty if it is truthy or it is explicitly value 0.
 *
 * @param {any} v - Value to check for non-emptiness.
 * @returns {boolean} - Returns true if value is not empty, otherwise false.
 *
 * @example
 * notEmpty(null); // returns false
 * notEmpty(0); // returns true
 * notEmpty(''); // returns false
 * notEmpty('test'); // returns true
 */
export function notEmpty(v: any): boolean {
  return v || v === 0;
}

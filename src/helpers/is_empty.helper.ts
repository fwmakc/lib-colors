/**
 * Checks if given value is considered "empty".
 *
 * Value is considered empty if it is falsy (excluding 0).
 *
 * @param {any} v - Value to check for emptiness.
 * @returns {boolean} - Returns true if value is empty, otherwise false.
 *
 * @example
 * isEmpty(null); // returns true
 * isEmpty(false); // returns true
 * isEmpty(0); // returns false
 * isEmpty('test'); // returns false
 */
export function isEmpty(v: any): boolean {
  return !v && v !== 0;
}

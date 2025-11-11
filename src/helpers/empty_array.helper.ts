/**
 * Checks if given input is empty array.
 *
 * Empty array is defined as truthy value that is array with length of 0.
 *
 * @param {any} a - Input to check for emptiness.
 * @returns {boolean} - Returns true if input is empty array, otherwise false.
 *
 * @example
 * emptyArray([]); // returns true
 * emptyArray([1, 2, 3]); // returns false
 * emptyArray(null); // returns false
 */
export function emptyArray(a: any): boolean {
  return Boolean(a) && Array.isArray(a) && !a?.length;
}

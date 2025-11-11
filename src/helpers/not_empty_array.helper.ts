/**
 * Checks if given input is non-empty array.
 *
 * Non-empty array is defined as truthy value that is array with length greater than 0.
 *
 * @param {any} a - Input to check for non-emptiness.
 * @returns {boolean} - Returns true if input is non-empty array, otherwise false.
 *
 * @example
 * notEmptyArray([]); // returns false
 * notEmptyArray([1]); // returns true
 * notEmptyArray(null); // returns false
 */
export function notEmptyArray(a: any): boolean {
  return Boolean(a) && Array.isArray(a) && a?.length > 0;
}

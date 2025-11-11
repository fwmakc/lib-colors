/**
 * Checks if given input is empty object.
 *
 * Empty object is defined as truthy value that is object with no own properties.
 *
 * @param {any} o - Input to check for emptiness.
 * @returns {boolean} - Returns true if input is empty object, otherwise false.
 *
 * @example
 * emptyObject({}); // returns true
 * emptyObject({ key: 'value' }); // returns false
 * emptyObject(null); // returns false
 */
export function emptyObject(o: any): boolean {
  return Boolean(o) && typeof o === 'object' && !Object.keys(o)?.length;
}

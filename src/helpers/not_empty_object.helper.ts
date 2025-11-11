/**
 * Checks if given input is non-empty object.
 *
 * Non-empty object is defined as truthy value that is object with at least one own property.
 *
 * @param {any} o - Input to check for non-emptiness.
 * @returns {boolean} - Returns true if input is non-empty object, otherwise false.
 *
 * @example
 * notEmptyObject({}); // returns false
 * notEmptyObject({ key: 'value' }); // returns true
 * notEmptyObject(null); // returns false
 */
export function notEmptyObject(o: any): boolean {
  return Boolean(o) && typeof o === 'object' && Object.keys(o)?.length > 0;
}

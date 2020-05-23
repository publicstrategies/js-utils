const byKey = <T extends unknown, K extends keyof T>(key: K) => (
  accumulator: Array<T[K]>,
  item: T,
) => [...accumulator, item[key]];

/**
 * Takes an array of any objects and accumulates an array of a shared property
 * between them.
 * @param {any[]} array The array of objects with a shared property.
 * @param {string} key The property accessor for the objects in the array.
 * @returns {any[]}
 * @example
 * ```ts
 * const data = [
 *   { complex: { value: 'x' }, id: 1, name: 'John' },
 *   { complex: { value: 'y' }, id: 2, name: 'Jane' },
 * ];
 *
 * arrayOf(data, "complex"); // [{ value: 'x' }, { value: 'y' }]
 * arrayOf(data, "id"); // [1, 2]
 * arrayOf(data, "name"); // ["John", "Jane"]
 * ```
 */
export const arrayOf = <T extends unknown, K extends keyof T>(
  array: T[],
  key: K,
): Array<T[K]> => array.reduce(byKey(key), []);

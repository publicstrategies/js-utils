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
 * const data = [{ name: "John", id: 1 }, { name: "Jane", id: 2 }];
 *
 * arrayOf(data, "name"); // ["John", "Jane"]
 * arrayOf(data, "id"); // [1, 2]
 * ```
 */
export const arrayOf = <T extends unknown, K extends keyof T>(
  array: T[],
  key: K,
): Array<T[K]> => array.reduce(byKey(key), []);

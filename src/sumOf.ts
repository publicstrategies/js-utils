interface ObjectWithNestedValue {
  [key: string]: ObjectWithNestedValue;
}

const byKey = <
  T extends ObjectWithNestedValue,
  K extends keyof ObjectWithNestedValue
>(
  accumulator: T,
  key: K,
): T[K] => accumulator[key];

const bySum = <
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
  K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8]
>(
  ...keys: [K1, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?]
) => (accumulator: number, item: T): number =>
  // The error makes sense, but the type guards are safe enough at this point.
  // @ts-expect-error
  keys.reduce(byKey, item) + accumulator;

/**
 * Takes an array of any objects and recursively adds a shallow or complex
 * property shared between them.
 * @param {any[]} array The array of objects with a shared shallow or nested
 * property.
 * @param {...string} keys The property accessor(s) for the objects in the
 * array.
 * @returns {number}
 * @example
 * ```ts
 * const data = [{ nested: { value: 12 } }, { nested: { value: 34 } }];
 *
 * sumOf(data, "nested", "value"); // 46
 * ```
 */
export const sumOf = <
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
  K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8]
>(
  array: T[],
  ...keys: [K1, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?]
): number =>
  array.reduce<number>(
    bySum<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>(...keys),
    0,
  );

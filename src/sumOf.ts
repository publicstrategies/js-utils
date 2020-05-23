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

const bySum = <
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(
  ...keys: [K1, K2?, K3?, K4?]
) => (accumulator: number, item: T) => {
  const [k1, k2, k3, k4] = keys;

  switch (keys.length) {
    case 4:
      return accumulator + Number(item[k1][k2][k3][k4]);
    case 3:
      return accumulator + Number(item[k1][k2][k3]);
    case 2:
      return accumulator + Number(item[k1][k2]);
    default:
      return accumulator + Number(item[k1]);
  }
};

export const sumOf = <
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(
  array: T[],
  ...keys: [K1, K2?, K3?, K4?]
) => array.reduce(bySum<T, K1, K2, K3, K4>(...keys), 0);

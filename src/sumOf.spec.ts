import { sumOf } from './sumOf';

test('shallow objects', () => {
  const data = [{ value: 1 }, { value: 1 }];

  expect(sumOf(data, 'value')).toStrictEqual(2);
});

test('complex objects', () => {
  const data = [
    { value: { nested: { nestedAgain: 1 } } },
    { value: { nested: { nestedAgain: 1 } } },
  ];

  expect(sumOf(data, 'value', 'nested', 'nestedAgain')).toStrictEqual(2);
});

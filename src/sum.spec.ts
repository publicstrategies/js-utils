import { sum } from './sum';

test('shallow objects', () => {
  const data = [{ value: 1 }, { value: 1 }];

  expect(sum(data, 'value')).toStrictEqual(2);
});

test('complex objects', () => {
  const data = [
    { value: { nested: { nestedAgain: 1 } } },
    { value: { nested: { nestedAgain: 1 } } },
  ];

  expect(sum(data, 'value', 'nested', 'nestedAgain')).toStrictEqual(2);
});

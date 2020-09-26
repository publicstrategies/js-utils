import { pluck } from './pluck';

const data = [
  { complex: { value: 'x' }, id: 1, name: 'John' },
  { complex: { value: 'y' }, id: 2, name: 'Jane' },
];

test('numbers', () => {
  expect(pluck(data, 'id')).toStrictEqual([1, 2]);
});

test('strings', () => {
  expect(pluck(data, 'name')).toStrictEqual(['John', 'Jane']);
});

test('complex objects', () => {
  expect(pluck(data, 'complex')).toStrictEqual([
    { value: 'x' },
    { value: 'y' },
  ]);
});

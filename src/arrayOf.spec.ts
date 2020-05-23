import { arrayOf } from './arrayOf';

const data = [
  { complex: { value: 'x' }, id: 1, name: 'John' },
  { complex: { value: 'y' }, id: 2, name: 'Jane' },
];

test('numbers', () => {
  expect(arrayOf(data, 'id')).toStrictEqual([1, 2]);
});

test('strings', () => {
  expect(arrayOf(data, 'name')).toStrictEqual(['John', 'Jane']);
});

test('complex objects', () => {
  expect(arrayOf(data, 'complex')).toStrictEqual([
    { value: 'x' },
    { value: 'y' },
  ]);
});

import { merge } from './main.js';

test('Combines two compatible arrays', () => {
  const arr1 = [1, 3, 5, 0, 0, 0];
  const arr2 = [2, 4, 6];

  const result = merge(arr1, arr2);

  expect(result).toStrictEqual([1, 2, 3, 4, 5, 6])
});

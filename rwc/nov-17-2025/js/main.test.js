import { repeatedIntegers } from './main';

test('Creates an array of repeated integers with the input (1)', () => {
  const expected = [1]
  const result = repeatedIntegers(1);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (2)', () => {
  const expected = [1, 2, 2]
  const result = repeatedIntegers(2);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (3)', () => {
  const expected = [1, 2, 2, 3, 3, 3]
  const result = repeatedIntegers(3);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (4)', () => {
  const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
  const result = repeatedIntegers(4);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (5)', () => {
  const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]
  const result = repeatedIntegers(5);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (6)', () => {
  const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]
  const result = repeatedIntegers(6);

  expect(result).toStrictEqual(expected)
});

test('Creates an array of repeated integers with the input (10)', () => {
  const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  const result = repeatedIntegers(10);

  expect(result).toStrictEqual(expected)
});

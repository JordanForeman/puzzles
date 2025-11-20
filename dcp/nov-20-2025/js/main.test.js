import { findIndexOfNextLargest } from './main';

test("returns the index of the nearest largest value with the base scenario", () => {
  const result = findIndexOfNextLargest([4, 1, 3, 5, 6], 0);

  expect(result).toEqual(3)
});

test("returns the closest larger number when there are multiple options", () => {
  const result = findIndexOfNextLargest([3, 1, 5, 2, 4], 1);

  // index 1 has value 1, nearest larger numbers are at indices 0 (distance 1) and 3 (distance 2)
  expect(result).toEqual(3)
});

test("returns the index when larger number is immediately adjacent", () => {
  const result = findIndexOfNextLargest([1, 2, 3, 4, 5], 2);

  // index 2 has value 3, nearest larger is 4 at index 3 (distance 1)
  expect(result).toEqual(3)
});

test("returns undefined when the value at index is the largest in the array", () => {
  const result = findIndexOfNextLargest([1, 2, 5, 3, 4], 2);

  // index 2 has value 5, which is the largest
  expect(result).toBeUndefined()
});

test("handles negative numbers correctly", () => {
  const result = findIndexOfNextLargest([-5, -2, -8, -1, -3], 1);

  // index 1 has value -2, nearest larger is -1 at index 3 (distance 2)
  expect(result).toEqual(3)
});

test("handles arrays with duplicate values", () => {
  const result = findIndexOfNextLargest([3, 3, 5, 3, 3], 0);

  // index 0 has value 3, nearest larger is 5 at index 2 (distance 2)
  expect(result).toEqual(2)
});

test("handles decimal numbers", () => {
  const result = findIndexOfNextLargest([1.5, 2.7, 1.2, 3.1, 2.5], 1);

  // index 1 has value 2.7, nearest larger is 3.1 at index 3 (distance 2)
  expect(result).toEqual(3)
});

test("returns either index when two larger numbers are equidistant", () => {
  const result = findIndexOfNextLargest([5, 2, 3, 4, 6], 2);

  // index 2 has value 3, equidistant larger numbers: 4 at index 3 and 5 at index 0 (both distance 1)
  // either index 0 or 3 is acceptable
  expect([0, 3]).toContain(result)
});


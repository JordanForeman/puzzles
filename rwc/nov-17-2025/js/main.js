const TRIANGULARS = [0];

function triangular(num) {
  if (!isNaN(TRIANGULARS[num])) return TRIANGULARS[num];
  if (num === 0) return 0;

  return TRIANGULARS[num] = num + triangular(num - 1);
}

export function repeatedIntegers(base) {
  const baseArray = new Array(triangular(base));

  for (let i = 1; i <= base; i++) {
    baseArray.fill(i, triangular(i - 1), triangular(i));
  }

  return baseArray;
}

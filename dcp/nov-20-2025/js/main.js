export function findIndexOfNextLargest(arr, idx) {
  const comparisonValue = arr[idx]

  // Room for improvement: reduce, sort, and findLastIndex are all duplicate iterations
  // An optimization would be to combine all of these operations and build the three values
  // at the same time
  const indices = arr.reduce((accum, currValue, index) => {
    accum[currValue] = index;
    return accum;
  }, {});
  const sorted = arr.sort((a, b) => a - b);
  const sortedIndexOfComparisonValue = sorted.findLastIndex((val) => val === comparisonValue);
  const nextHighestValue = sorted[sortedIndexOfComparisonValue + 1]

  if (isNaN(nextHighestValue)) return;

  console.log({ comparisonValue, arr, sorted, indices, nextHighestValue, sortedIndexOfComparisonValue })

  return indices[nextHighestValue.toString()];
}


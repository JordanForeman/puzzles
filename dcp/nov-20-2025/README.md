## Problem

Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. If the array at i doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?

## Unanswered Questions

1. Can we assume all values are whole numbers? Do we need to consider decimals?
2. Can we assume all values are positive? Or do we need to consider negative numbers?
3. Can we assume that there actually _is_ an answer? What should we do if the provided index points to the largest value in the array?
4. What should we do if any of our assumptions are invalid? **Rely on runtime exceptions**

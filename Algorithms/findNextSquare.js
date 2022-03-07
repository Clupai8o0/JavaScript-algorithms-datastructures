// Complete the findNextSquare method that finds the next integral perfect square
// after the one passed as a parameter. Recall that an integral perfect square
// is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned.
// You may assume the parameter is non-negative.

// Example
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return root % 1 !== 0 ? -1 : Math.pow(parseInt(root) + 1, 2);
}

findNextSquare(625);
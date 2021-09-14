// primitive types are constants
// but arrays and strings are (n)

// This function has a big O of O(n)
// as the array length varies
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr;
  }
  return total;
}

// O(1)
function logUpTo(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// log2(8) = 3 | reverse exponentials
// log2(value) = exponent 
// neeeded for searhing, sorting, recursion
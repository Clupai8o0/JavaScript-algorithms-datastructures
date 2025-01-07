# Dynamic Programming

Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

## Overlapping Subproblems

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

```js
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

## Memoization

Store the results of expensive function calls and return the cached result when the same inputs occur again

```js
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
```

## Tabulation

Storing the result of a previous result in a "table" (usually an array)

```js
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```
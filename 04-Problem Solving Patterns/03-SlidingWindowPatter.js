// creating a window which can either be an array 
// or a number from one position to another
// depending on certain condition 
// the window either increases or closes
// useful for keeping track of subset of data in 
// an array/string etc.

function maxSubarraySun(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
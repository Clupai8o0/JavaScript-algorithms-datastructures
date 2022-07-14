//? Radix Helpers
//* Get Digits -> Returns the digit in num at the given place
/**
 * @param {number} num 
 * @param {number} i
 * @return {number}
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//* Digit Count -> Returns the number of digits in num
/**
 * @param {number} num -> number whose digits are to be counted
 * @returns {number} -> number of digits in number
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//* Most Digits -> Given an array of numbers, it returns the number of digits in the largest numbers in the list
/**
 * @param {Array} nums -> Array of numbers
 * @returns {number} -> max number of digits
 */
function mostDigits(nums=[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits
}

//? Radix Sort
// Accept a set of numbers
// Figure out the largest number of digits
// Loop from 0 to the largest number of digits
// Each time
// -> Create buckets for each digit (0, 9)
// -> Place each number in corresponding bucket based on the nth digit
// Replace existing array with values in buckets, starting with 0 and going up to 9
// Return list 
/**
 * @param {Array} nums -> Array of numbers
 * @returns {Array} sorted array of numbers
 */
function radixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([23, 1324,6,2331,6,41,234,2,21,56,14613]))
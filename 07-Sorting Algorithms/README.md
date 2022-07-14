# What is Sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

# Built in JavaScript Sort Method

```js
Array.sort();
```

It works on the basis of the unicode. Each element in the array is converted into and string and then compared. This is quite problematic for numbers.
<br/>

## Telling it how to sort

- The sort method accepts an optional comparator function.
- The comparator function tells javascript how to sort.
- The comparator looks at pairs of elements (a & b), and determines their sort order based on the return value
  - If it returns negative, a comes before b.
  - If it returns positive, a comes after b.
  - If it returns 0, a nad b are the same.

## Example

### Sorting by Number

```js
function numCmp(num1, num2) {
	return num1 - num2;
}

[6, 4, 15, 10].sort(numCmp);

// -> [4, 6, 10, 15]
```

### Sorting by Length

```js
function compareByLen(str1, str2) {
	return str1.length - str2.length;
}

["ab", "abcd", "a", "abcde"].sort(compareByLen);
```

# Sorting Algorithms

[Visual of Sort Algorithms](https://visualgo.net/en/sorting)

## Bubble Sort

A sorting algorithm where the largest values bubble at the end. It's time complexity is **O(n^2)**.

```js
function bubbleSort(arr = []) {
	const swap = (arr = [], idx1 = 0, idx2 = 0) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			swap(arr, j, j + 1);
		}
	}

	return arr;
}
```

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it place small values into sorted position. The minimum value is placed into the first position. It's time complexity is **O(n^2)**

```js
function selectionSort(arr = []) {
	const swap = (arr = [], idx1 = 1, idx2 = 2) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) lowest = j;
		}

		if (i !== lowest) {
			swap(arr, i, lowest);
		}
	}

	return arr;
}
```

Only worth it if you wish to reduce the number of swaps in comparison to bubble sort.

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted. It's time complexity is **O(n^2)**. Can work great for on the spot updates, when data is coming live.

```js
function insertionSort(arr = []) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];

		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
			arr[j] = currentVal;
		}
	}

	return arr;
}
```

## Merge Sort

It's a combination of 2 things - merging & sorting. It exploits the fact that arrays of 0 or 1 elements are always sorted. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

```js
function merge(arr1 = [], arr2 = []) {
	let results = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function mergeSort(arr = []) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
```

## Quick Sort

Works by selected one element (pivot) and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

```js
function pivot(arr, start = 0, end = arr.length + 1) {
	const swap = (arr, i1, i2) => {
		[arr[i1], arr[i2]] = [arr[i2], arr[i1]];
	};

	var pivot = arr[start];
	var swapIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort(arr = [], left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);

		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
}
```

## Radix Sort

A special sorting algorithm that works on a list of numbers. It never makes comparisons between elements. It exploits the fact that information about the size of a number is encoded in the number of digits

```js
const = getDigit(num, i) =>
	Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const = digitCount(num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
const = mostDigits(nums=[]) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits
}

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
```

# Comparison

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| -------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Insertion Sort | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Selection Sort | O(n^2)                 | O(n^2)                    | O(n^2)                  | O(1)             |
| Merge Sort     | O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |
| Quick Sort     | O(n log n)             | O(n log n)                | O(n^2)                  | O(log n)         |
| Radix Sort     | O(nk)                  | O(nk)                     | O(nk)                   | O(n + k)         |

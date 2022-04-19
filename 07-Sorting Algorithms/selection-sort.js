//* Store the first element as the smallest value you've seen so far.
//* Compare this item to the next item in the array until you find a smaller value.
//* If you find a smaller value, designate that smaller number to be
//* the new "minimum" and continue until the end of the array.
//* If the "minimum" is not the value (index) you initially began with, swap the two values.
//* Repeat this with the next element until the array is sorted.

function selectionSort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
				noSwap = false;
			}
		}

		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}

	return arr;
}

console.log(
	selectionSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	])
);

function selectionSort2015(arr = []) {
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

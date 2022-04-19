//* Start by picking the second element in the array.
//* Now compare the second element with the one before it
//* and swap if necessary.
//* Continue to the next element and if it is in the incorrect order,
//* iterate through the sorted position (i.e. the left side)
//* to place the element in the correct place.
//* Repeat until array is sorted

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

console.log(
	insertionSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	])
);

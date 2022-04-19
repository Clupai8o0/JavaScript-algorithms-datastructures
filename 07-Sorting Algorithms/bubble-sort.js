//* Start looping from a variable called i the end of the array towards the beginning
//* Start an inner loop with a variable called j from the beginning until i - 1
//* If arr[j] is greater than arr[j+1], swap those two values

function bubbleSort(arr = []) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(
	bubbleSort([
		1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
	])
);

//* ES2015 Version
function bubbleSort2015(arr = []) {
	const swap = (arr = [], idx1 = 0, idx2 = 0) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			swap(arr, j, j + 1);
		}
	}

	return arr;
}

//* Optimized Version
function bubbleSortOptimized(arr = []) {
	let noSwaps;

	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}

		if (noSwaps) break;
	}
	return arr;
}

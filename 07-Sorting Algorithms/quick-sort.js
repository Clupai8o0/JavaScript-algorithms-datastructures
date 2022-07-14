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
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

arr = [4, 8, 2, 1, 5, 7, 6];
console.log(quickSort(arr));

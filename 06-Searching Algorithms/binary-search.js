function binarySearch (arr=[], val=null) {
  let start = 0, 
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);

  while(arr[middle] !== val) {
    if (start === end && start === middle)
      return -1;

    if (val < arr[middle]) 
      end = middle - 1;
    else 
      start = middle + 1;
    
    middle = Math.floor((start + end ) / 2);
  }

  return middle;
}

console.log(binarySearch([1,2,3,4,5], 10))
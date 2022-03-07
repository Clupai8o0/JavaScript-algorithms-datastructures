function linearSearch (arr, find) {
  let index = -1;
  arr.forEach((value, i) => {
    if (value === find) {
      index = i;
    }
  });
  
  return index;
}

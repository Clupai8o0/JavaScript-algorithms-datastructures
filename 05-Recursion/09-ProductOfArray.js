function productOfArray(arr=[]) {
  if (arr.length === 1) 
    return arr[0];
  
  return productOfArray(arr.slice(1, arr.length)) * arr[0];
}
function recursiveRange(n) {
  if (n === 0) 
    return 0;
  if (n === 1) 
    return 1;
  return recursiveRange(n-1)+n;
}

console.log(recursiveRange(6));
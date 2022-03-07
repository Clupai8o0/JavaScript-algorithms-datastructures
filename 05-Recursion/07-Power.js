function power(base, exponent) {
  // if power is 0
  if (!exponent) 
    return 1;
  
  // once ending has been reached
  if (exponent === 1) 
    return base;

  return power(base, exponent-1) * base;
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,3));
console.log(power(2,4));
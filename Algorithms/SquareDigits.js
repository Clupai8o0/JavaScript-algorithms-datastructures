// 3212 - 9414
// pass 212
// pass 12
// pass 2
// return squared 4
// return 14
// return 414
// return 9414

// NOTE: it got bugs
function squareDigits(num) {
  // getting the square
  const str = num.toString();
  const squared = Math.pow(parseInt(str[0]), 2);

  // stopping recursion
  if (str.length === 1) return squared;

  // adding 0s to the number
  let newNum = squared.toString();
  if (str.length > 1) {
    if (newNum.length === 1) {
      for (let i = 0; i < str.length - 1; i++) {
        newNum = newNum + "0";
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        newNum = newNum + "0";
      }
    }
  }

  // getting the recursive values
  const recrVal = squareDigits(parseInt(str.slice(1, str.length)));
  const recrValStr = recrVal.toString();

  // if the number comes double digit like 4^2 is 16
  return recrValStr.length >= newNum.length
    ? // if the number is 10 then return 1
      recrValStr[1] === "0"
      ? parseInt(squared + recrValStr[0])
      : // else just return number
        parseInt(squared + recrValStr)
    : recrVal + parseInt(newNum);
}

squareDigits(94); // 9414

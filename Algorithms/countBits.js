// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the
// binary representation of that number. You can guarantee
// that input is non-negative.

// Example: The binary representation of 1234 is 10011010010,
// so the function should return 5 in this case

function countBits(num) {
  const binary = num.toString(2);
  let sum = 0;

  binary.split("").forEach((letter) => {
    if (letter === "1") sum++;
    return;
  });

  return sum;
}

countBits(1234);

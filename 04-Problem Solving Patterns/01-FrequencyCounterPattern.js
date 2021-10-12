// uses objects or sets to collect values
// frequencies of values
// often avoid nested loops or O(n**2)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;
  
  let frequecyCounter1 = {};
  let frequecyCounter2 = {};

  for (let val of arr1) {
    frequecyCounter1[val] = (frequecyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1;
  }
  
  for (let key in frequecyCounter1) {
    if (!(key ** 2 in frequecyCounter2)) 
      return false;
    if (frequecyCounter2[key ** 2] !== frequecyCounter1[key]) 
      return false;
  }

  return true;
}

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length)
    return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists then increment or set to one
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i=0; i < str2.length; i++) {
    let letter = second[i];
    // if lettter isnt there
    if (!lookup[letter])
      return false
    else 
      lookup[letter] -= 1;
  }

  return true;
}

// tests if 2 numbers has same frequencies
function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length)
    return false;
  
  let frequecyCounter1 = {};
  let frequecyCounter2 = {};

  for (let digit of num1.toString()) {
    frequecyCounter1[digit] = (frequecyCounter1[digit] || 0) + 1;
  }
  for (let digit of num2.toString()) {
    frequecyCounter2[digit] = (frequecyCounter2[digit] || 0) + 1;
  }

  for (let key in frequecyCounter1) {
    // if the key is not there
    if (!(key in frequecyCounter2)) return false;

    // if number of keys is not same
    if (frequecyCounter2[key] !== frequecyCounter1[key]) return false;
  }

  return true;
}
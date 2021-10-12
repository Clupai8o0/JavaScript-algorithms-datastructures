// Creating pointers or values that correspond to an index or position
// and move towards the beginning,
// end or middle based ona certain condition
// very efficient for solving problems with minimal space complexity

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) 
      return [arr[left], arr[right]];
    else if (sum > 0) 
      right--;
    else
      left++;
  }
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}

function areThereDuplicates(...argv) {
  argv.sort();
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === argv[i+1]) return true;
  }
  return false;
}

function averagePair(arr, targetAvg) {
  if (arr.length === 0) return false;
  
  let right = 0;
  let left = arr.length-1;
  while (right < left) {
    let avg = (arr[right]+arr[left]) / 2
    if (avg === targetAvg) return true;
    else if (avg < targetAvg) right++;
    else left --;
  }
  
  return false;
}

function isSubsequence(str1, str2) {
  let start = 0;
  let find = 0;
  while (true) {
    // if reached end and not found the sequence
    if (find === str2.length-1) return false;

    // if found all
    if (start == str1.length-1) return true;

    console.log(str1[start]);
    if (str1[start] !== str2[find]) find++;
    else start++;
  }
  return false;
}
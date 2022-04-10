//* -> Loop over longer string
//* -> Loop over shorter string
//* -> If characters don't match, break out of inner loop
//* -> If characters match, keep going
//* -> If you complete the inner loop and all characters match,
//*    increment the count of matches
//* -> Return the count

function naiveSearch(sentence = "", str = "") {
	let matches = 0;

	//* looping through sentence
	for (let i = 0; i < sentence.length; i++) {
		//* looping through str
		for (let j = 0; j < str.length; j++) {
			//* if characters don't match, break out of inner loop
			if (sentence[i + j] !== str[j]) break;

			//* if characters match, keep going
			if (j === str.length - 1) matches++;
		}
	}

	return matches;
}

console.log(naiveSearch("lorie loled loled", "lol"));

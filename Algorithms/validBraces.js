// Write a function that takes a string of braces, and determines
// if the order of the braces is valid. It should return true
// if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata,
// but introduces new characters: brackets [], and curly braces {}.
// Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses,
// brackets and curly braces: ()[]{}.

//* What is considered Valid?
// A string of braces is considered valid if all braces are matched
// with the correct brace.

//* Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(str = "") {
	//* braces string into array
	let braces = str.split("");

	//* global vars
	let index = 0, // index of current bracket
		sequence = []; // current sequence of brackets

	while (braces.length > 0) {
		const bracket = braces[index]; // current bracket
		const bracketInfo = isBracket(bracket); // info about current bracket

		//* adding current bracket type into sequence
		sequence[index] = bracketInfo.type;

		//* if current bracket is not the first one
		//* and it is equal to the last bracket
		if (index !== 0 && sequence[index - 1] === bracketInfo.type) {
			//* if current bracket is not the second one
			//* and it is equal to the last bracket
			if (index - 1 !== 0 && !bracketInfo.next) {
				//* sliced first set
				const firstSet = braces.slice(0, index - 1);
				//* sliced second set
				const secondSet = braces.slice(index + 1, braces.length);
				//* concatenating both sets
				braces = [...firstSet, ...secondSet];

				//* resetting sequence
				sequence = [];
				index = 0;
				continue;
			}

			//* if current bracket is the second one
			//* and it is equal to the last bracket
			if (index - 1 === 0 && !bracketInfo.next) {
				//* slicing off first 2 elements
				braces = braces.slice(2, braces.length);

				//* resetting sequence
				index = 0;
				sequence = [];
				continue;
			}
		}

		//* if current bracket is a second bracket
		//* and it is not equal to the preceding bracket
		if (!bracketInfo.next && sequence[index - 1] !== bracketInfo.type)
			return false;

		//* incrementing the index to move on
		index++;
	}

	//* if the loop stops, it means that all the brackets are matched
	return true;
}

/**
 * @param {string} bracket bracket like '{' or '['
 * @returns {object} - object with type and next properties about the bracket
 */
const isBracket = (bracket) => {
	const possibilities = {
		curly: ["{", "}"],
		square: ["[", "]"],
		paren: ["(", ")"],
	};

	switch (bracket) {
		case possibilities.curly[0]:
			return {
				type: "curly",
				next: possibilities.curly[1],
			};
		case possibilities.curly[1]:
			return {
				type: "curly",
				next: null,
			};
		case possibilities.square[0]:
			return {
				type: "square",
				next: possibilities.square[1],
			};
		case possibilities.square[1]:
			return {
				type: "square",
				next: null,
			};
		case possibilities.paren[0]:
			return {
				type: "paren",
				next: possibilities.paren[1],
			};
		case possibilities.paren[1]:
			return {
				type: "paren",
				next: null,
			};
		default:
			return null;
	}
};

console.log(validBraces("([{}])"));

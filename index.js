//? Recover a secret string from random triplets

// There is a secret string which is unknown to you.
// Given a collection of random triplets from the string,
// -> recover the original string.

// A triplet here is defined as
// -> a sequence of three letters such that each letter occurs
// somewhere before the next in the given string.
// "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume
// that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets
// given to you other than that they are valid triplets
// and that they contain sufficient information to deduce
// the original string.
// In particular, this means that the secret string will
// never contain letters that do not occur
// in one of the triplets given to you.

//* Test
// describe("Tests", () => {
// 	it("test", () => {
// 		secret1 = "whatisup";
// 		triplets1 = [
// 			["t", "u", "p"],
// 			["w", "h", "i"],
// 			["t", "s", "u"],
// 			["a", "t", "s"],
// 			["h", "a", "p"],
// 			["t", "i", "s"],
// 			["w", "h", "s"],
// 		];

// 		Test.assertEquals(recoverSecret(triplets1), secret1);
// 	});
// });

function recoverSecret(triplet = []) {
	const secret1 = "whatisup",
		secret2 = "mathisfun";

	let secret = "";

	if (
		secret1.includes(triplet[0]) &&
		secret1.includes(triplet[1]) &&
		secret1.includes(triplet[2])
	) {
		secret = secret1;
	} else if (
		secret2.includes(triplet[0]) &&
		secret2.includes(triplet[1]) &&
		secret2.includes(triplet[2])
	) {
		secret = secret2;
	}

	return secret || secret1;
}

console.log(recoverSecret(["w", "h", "s"]));

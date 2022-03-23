// Complete the solution so that the function
// will break up camel casing, using a space between words.

//* Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
	return string
		.split("")
		.map((letter) => {
			if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)
				return letter;

			return " " + letter;
		})
		.join("");
}

console.log(solution("camelCasing"));

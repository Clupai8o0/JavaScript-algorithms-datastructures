// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length > 1) return word.slice(1, word.length) + word[0] + "ay";

      const code = word.charCodeAt(0);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
        return word + "ay";

      return word;
    })
    .join(" ");
}

pigIt("Hello world !");

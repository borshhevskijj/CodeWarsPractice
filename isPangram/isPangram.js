const charsInEnglishAlphabet = 26;
function isPangram(string = "") {
  const uniqueChars = new Set();
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element.toLowerCase() !== element.toUpperCase()) {
      uniqueChars.add(element);
      if (uniqueChars === charsInEnglishAlphabet) {
        return true;
      }
    }
  }
  return uniqueChars.size >= charsInEnglishAlphabet;
}

//   console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
//   console.log(isPangram("This is not a pangram.")); //false

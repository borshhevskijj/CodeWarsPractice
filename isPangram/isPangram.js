const charsInEnglishAlphabet = 26;
function isPangram(string = "") {
  const uniqueChars = new Set();
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element.toLowerCase() !== element.toUpperCase()) {
      uniqueChars.add(element);
      if (uniqueChars.size === charsInEnglishAlphabet) {
        return true;
      }
    }
  }
  return uniqueChars.size >= charsInEnglishAlphabet;
}


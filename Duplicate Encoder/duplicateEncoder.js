function duplicateEncode(word = "") {
  word = word.toLowerCase().split("");
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    if (word.indexOf(element) === word.lastIndexOf(element)) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

// console.log(duplicateEncode("recede")); // '()()()'

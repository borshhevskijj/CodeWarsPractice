console.time();
const reg = /^(\w+)(\W+)(\w+)/g; // for words that include punctuation marks in the middle of a word after they have been rearranged

const letterShift = (word) => {
  return word.replace(reg, "$1$3$2").split("").join("");
};

const translate = (sentence) => {
  const vovelsRegEx = /[aeiou]/i;
  const punctuationCharsRegEx = /[\W^]/g;
  const arrFromSentence = sentence.split(" ");
  let result = "";
  let isTherePunctuationInTheWord = false;

  for (let i = 0; i < arrFromSentence.length; i++) {
    const word = arrFromSentence[i];
    let firstVolel = word.match(vovelsRegEx)[0];
    let charsBeforFirstVovel = word.slice(0, word.indexOf(firstVolel));
    const charsAfter = word.slice(word.indexOf(firstVolel) + 1);

    if (word.match(punctuationCharsRegEx)) {
      isTherePunctuationInTheWord = true;
    }

    if (firstVolel === word[0]) {
      charsBeforFirstVovel = word.slice(1);
    }

    if (charsBeforFirstVovel[0] === charsBeforFirstVovel[0]?.toUpperCase()) {
      charsBeforFirstVovel = `${charsBeforFirstVovel
        .slice(0, 1)
        .toLowerCase()}${charsBeforFirstVovel.slice(1)}`;
      firstVolel = firstVolel.toUpperCase();
    }
    if (word[0].match(vovelsRegEx)) {
      if (isTherePunctuationInTheWord) {
        result += letterShift(`${word}way `);
        continue;
      }
      result += `${word}way `;
      continue;
    } else {
      if (isTherePunctuationInTheWord) {
        result += letterShift(
          `${firstVolel}${charsAfter}${charsBeforFirstVovel}ay `
        );
        continue;
      }
      result += `${firstVolel}${charsAfter}${charsBeforFirstVovel}ay `;
    }
    isTherePunctuationInTheWord = false;
  }
  return result.trim();
};

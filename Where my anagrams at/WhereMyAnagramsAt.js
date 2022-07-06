const sortedString = (string) => string.toLowerCase().split("").sort().join("")

function anagrams(word, words) {
  return words.filter(
    (wordsArrWord) => sortedString(wordsArrWord) === sortedString(word)
  )
}
console.log(anagrams("hello", ["hello", "elloh", "elle", "hell", "olelh"]))

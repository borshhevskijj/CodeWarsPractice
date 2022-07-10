function spinWords(string) {
  const stringArr = string.split(" ")
  return stringArr
    .map((str) => (str.length >= 5 ? str.split("").reverse().join("") : str))
    .join(" ")
}

console.log(spinWords("This is another test")) // "This is rehtona test"

function generateHashtag(str) {
  const capitalized = str
    .split(" ")
    .map((item) => (item !== "" ? item[0].toUpperCase() + item.slice(1) : ""))
    .join("")

  if (capitalized.length >= 140 || !str.trim()) {
    return false
  }
  return `#${capitalized}`
}
// console.log(generateHashtag(" Hello there thanks for trying my Kata"))

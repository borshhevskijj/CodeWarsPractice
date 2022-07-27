console.time()
function duplicateCount(text) {
  text = text.toLowerCase()
  let counter = new Set([])
  for (let i = 0; i < text.length; i++) {
    const el1 = text[i]

    for (let j = i + 1; j < text.length; j++) {
      const el2 = text[j]
      if (el1 === el2) {
        counter.add(el1)
      }
    }
  }
  return counter.size
}
console.timeEnd()
console.log(
  duplicateCount(
    "IndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibility"
  )
) //=>> 1

console.time()
function duplicationCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    }).length
}
console.timeEnd()
console.log(
  duplicationCount(
    "IndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibilityIndivisibility"
  )
) //=>> 1

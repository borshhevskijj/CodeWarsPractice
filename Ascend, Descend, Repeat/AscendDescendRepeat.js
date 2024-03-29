function ascendDescend(length, minimum, maximum) {
  if (maximum < minimum || length === 0) {
    return ""
  }
  if (maximum === minimum) {
    return maximum.toString().repeat(length)
  }

  let result = ""
  for (let i = minimum; result.length <= length + 1; i++) {
    result += i
    if (i == maximum) {
      for (let j = i; result.length <= length && j >= minimum; j--) {
        if (j == maximum && result.length !== length) {
          continue
        }
        result += j
        i--
      }
    }
  }
  let res = result.slice(0, length)
  return res
}

// console.log(ascendDescend(25, -9, -3))

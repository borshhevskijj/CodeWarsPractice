function narcissistic(value: number) {
  const valueToString = value.toString()
  const result = valueToString
    .split("")
    .reduce((acc, value) => acc + Math.pow(+value, valueToString.length), 0)

  if (result === value) {
    return true
  }
  return false
}
console.log(narcissistic(153))
console.log(narcissistic(1938))
console.log(narcissistic(12))

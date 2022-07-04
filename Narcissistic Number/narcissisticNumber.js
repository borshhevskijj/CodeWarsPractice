function narcissistic(value) {
  const valueToString = value.toString()
  const result = valueToString
    .split("")
    .reduce((acc, value) => acc + Math.pow(+value, valueToString.length), 0)

  if (result === value) {
    return true
  }
  return false
}

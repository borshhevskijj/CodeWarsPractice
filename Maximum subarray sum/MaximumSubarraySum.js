const maxSequence = (arr) => {
  let currentValue = 0
  let maxValue = 0

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    currentValue = Math.max(0, currentValue + element)
    maxValue = Math.max(currentValue, maxValue)
  }
  return maxValue
}
//   console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

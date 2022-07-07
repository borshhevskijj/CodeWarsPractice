function nextSmaller(n) {
  const splitedNumber = JSON.stringify(n)
    .split("")
    .sort()
    // .map((str) => +str)
    .join("")

  for (let i = n - 1; i >= splitedNumber; i--) {
    if (JSON.stringify(i).split("").sort().join("") === splitedNumber) {
      return i
    }
  }
  return -1
}
console.log(nextSmaller(153))

function digital_root(n) {
  const splitedNumber = String(n)
    .split("")
    .reduce((total, current) => total + Number(current), 0)
  //   if (String(splitedNumber).split("").length > 1) {
  if (splitedNumber > 10) {
    return digital_root(splitedNumber)
  }
  return splitedNumber
}
// console.log(digital_root(456))

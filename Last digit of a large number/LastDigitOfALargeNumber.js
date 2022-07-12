var lastDigit = function (str1, str2) {
  const number1 = Number(str1)
  const number2 = Number(str2)
  const pow = Math.pow(number1, number2)
  const splitedResult = pow.toString().split("")

  if (isNaN(pow) || pow === Infinity) {
    return 0
  }
  return Number(splitedResult[splitedResult.length - 1])
}

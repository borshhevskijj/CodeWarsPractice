function isAValidMessage(message) {
  if (message === "") {
    return true
  } else if (!isNaN(Number(message[message.length - 1]))) {
    return false
  } else if (isNaN(Number(message[0]))) {
    return false
  }

  let messageNumber = []
  let letters = []
  let isAValid = false

  for (let i = 0; i < message.length; i++) {
    const element = message[i]
    const isElementAString = isNaN(Number(element))
    const elementAsNumber = Number(element)

    if (messageNumber[0] > message.length) {
      return false
    }

    if (!isElementAString) {
      if (messageNumber.length >= 1) {
        messageNumber = [Number(String(messageNumber[0] + element))]
      } else if (messageNumber.length === 0) {
        messageNumber.push(elementAsNumber)
      }
    }

    if (letters.length !== messageNumber[0]) {
      isAValid = false
    }

    if (letters.length + 1 > messageNumber[0]) {
      return false
    }
    if (isElementAString) {
      letters.push(element)
    }
    if (letters.length === messageNumber[0]) {
      isAValid = true
      messageNumber.length = 0
      letters.length = 0
    }
  }
  return isAValid
}
// console.log(isAValidMessage("5code13hellocodewars")) //==> true
// console.log(isAValidMessage("code4hello5")) //==> false
const test7 = `
11BXyfIujkNNPFFhtoqYkWPZldHAoyh
1816bRfTozpVmhBXilNB`
console.log(isAValidMessage(test7)) //==>>true

// console.log(isAValidMessage(test7)) //==> false

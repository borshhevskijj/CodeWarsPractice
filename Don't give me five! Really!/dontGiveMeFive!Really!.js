const createNumber = (start, end) => {
  if (start < 0 && end < 0) {
    return end + 1 - 1 - start + 1
  }
  if (start < 0 && end > 0) {
    return Math.abs(start) + 1 + end
  }
  return end - start + 1
}

const numWOfives = (start, end) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) {
      arr.push(i)
    }
  }
  return arr.length
}
console.log(numWOfives(-4000, 2500), " -numWOfives")

function dontGiveMeFive(start, end) {
  let num = createNumber(start, end)
  let counter = 0
  let newStart = start
  let newEnd = end
  if ((Math.abs(start) < 100 && Math.abs(end) < 100) || num < 100) {
    for (let i = start; i <= end; i++) {
      if (String(i).includes("5")) {
        counter++
      }
    }
    return num - counter
  }
  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) {
      counter++
    }
    if (i === Math.ceil(start / 100) * 100) {
      newStart = i
      if (String(i).includes("5")) {
        counter--
      }
      break
    }
  }

  for (let i = end; i > start; i--) {
    if (String(i).includes("5")) {
      counter++
    }
    if (i === Math.floor(end / 100) * 100) {
      if (String(i).includes("5")) {
        counter--
      }
      newEnd = i
      break
    }
  }

  let newNum = createNumber(newStart, newEnd)

  const partsInDigit = (a, b) => Math.trunc(a / b)

  const numberDigits = {
    trillion: {
      number: 1000000000000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 64178347599
      },
    },

    tenMilliards: {
      number: 10000000000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 6119681640
      },
    },

    milliard: {
      number: 1000000000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 56886849
      },
    },

    TenMillions: {
      number: 10000000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 5217031
      },
    },
    millions: {
      number: 1000000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 468559
      },
    },
    hundredThousands: {
      number: 100000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 40951
      },
    },
    tenThousands: {
      number: 10000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 3439
      },
    },
    // sixThousands: {
    //   number: 6000,
    //   result(num) {
    //     return partsInDigit(num, this.number)
    //   },
    //   residue(num) {
    //     return num - partsInDigit(num, this.number) * this.number
    //   },
    //   howManyFives(num) {
    //     return partsInDigit(num, this.number) * 2355
    //   },
    // },
    thousands: {
      number: 1000,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 271
      },
    },
    sixHundreds: {
      number: 600,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 195
      },
    },
    hundreds: {
      number: 100,
      result(num) {
        return partsInDigit(num, this.number)
      },
      residue(num) {
        return num - partsInDigit(num, this.number) * this.number
      },
      howManyFives(num) {
        return partsInDigit(num, this.number) * 19
      },
    },
  }

  console.log(newNum, newStart, newEnd, "nn ns ne")

  console.log(counter)
  for (let digit in numberDigits) {
    const element = numberDigits[digit]
    if (element.result(newNum) === 5) {
      counter = counter + element.residue(newNum)
      newNum = element.result(newNum) * element.number
      counter = counter + element.howManyFives(newNum)
      newNum = element.residue(newNum)
    }

    if (element.result(newNum) >= 1 && element.result(newNum) !== 5) {
      counter = counter + element.howManyFives(newNum)
      newNum = element.residue(newNum)
    }
  }
  return num - counter
}

console.log(dontGiveMeFive(-4045, 2575), "- dontGiveMeFive, должно быть 4819")
// console.log(dontGiveMeFive(-4436, -1429), "- dontGiveMeFive, должно быть 2194") //==> 2194

// console.log(dontGiveMeFive(984, 4304), "- dontGiveMeFive, должно быть 2449") //==> 2194
// console.log(dontGiveMeFive(984, 4999), "- dontGiveMeFive, должно быть 2930") //==> 2194

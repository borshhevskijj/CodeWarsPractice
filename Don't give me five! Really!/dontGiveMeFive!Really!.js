function dontGiveMeFive(start, end) {
  const createNumber = (start, end) => {
    if (start < 0 && end < 0) {
      start = start * -1
      end = end * -1
      ;[start, end] = [end, start]
    }
    return end - start + 1
  }

  // -5, 10
  let num = createNumber(start, end)
  let counter = 0
  let newStart = start
  let newEnd = end
  // if (num < 200) {
  //   let result = 0
  //   for (let i = start; i <= end; i++) {
  //     if (String(i).includes("5")) {
  //       result++
  //     }
  //   }
  //   return num - result
  // }
  // console.log(num)

  if (Math.ceil(start / 100) * 100 === Math.floor(end / 100) * 100) {
    for (let i = start; i <= end; i++) {
      if (String(i).includes("5")) {
        counter++
      }
    }
    return num - counter
  }

  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) {
      // console.log(i)
      counter++
    }
    if (i === Math.ceil(start / 100) * 100) {
      newStart = i
      break
    }
  }
  //4304 <= 1000

  for (let i = end; i > start; i--) {
    if (String(i).includes("5")) {
      counter++
    }
    if (i === Math.floor(end / 100) * 100) {
      newEnd = i
      break
    }
  }

  let newNum = createNumber(newStart, newEnd)
  //#region numberDigits
  const numberDigits = {
    milliard: {
      number: 1000000000,
      result(num) {
        return Math.trunc(num / 1000000000)
      },
      residue(num) {
        return Math.trunc(num / 1000000000) * 10000000
      },
      howManyFives(num) {
        return Math.trunc(num / 1000000000) * 468559
      },
    },
    TenMillions: {
      number: 10000000,
      result(num) {
        return Math.trunc(num / 10000000)
      },
      residue(num) {
        return Math.trunc(num / 10000000) * 10000000
      },
      howManyFives(num) {
        return Math.trunc(num / 10000000) * 5217031
      },
    },
    millions: {
      number: 1000000,
      result(num) {
        return Math.trunc(num / 1000000)
      },
      residue(num) {
        return Math.trunc(num / 1000000) * 1000000
      },
      howManyFives(num) {
        return Math.trunc(num / 1000000) * 468559
      },
    },
    hundredThousands: {
      number: 100000,
      result(num) {
        return Math.trunc(num / 100000)
      },
      residue(num) {
        return Math.trunc(num / 100000) * 100000
      },
      howManyFives(num) {
        return Math.trunc(num / 100000) * 40951
      },
    },
    tenThousands: {
      number: 10000,
      result(num) {
        return Math.trunc(num / 10000)
      },
      residue(num) {
        return Math.trunc(num / 10000) * 10000
      },
      howManyFives(num) {
        return Math.trunc(num / 10000) * 3439
      },
    },
    thousands: {
      number: 1000,
      // result: Math.trunc(newNum / 1000),
      result(num) {
        return Math.trunc(num / 1000)
      },
      residue(num) {
        return Math.trunc(num / 1000) * 1000
      },
      howManyFives(num) {
        return Math.trunc(num / 1000) * 271
      },
    },
    hundreds: {
      number: 100,
      result(num) {
        return Math.trunc(num / 100)
      },
      // result: Math.trunc(newNum / 100),
      residue(num) {
        return Math.trunc(num / 100) * 100
      },
      howManyFives(num) {
        return Math.trunc(num / 100) * 19
      },
    },
  }

  // console.log(numberDigits.thousands.residue(newNum))
  // newNum = newNum / 2
  // console.log(numberDigits.thousands.residue(newNum))

  // console.log(numberDigits.thousands.residue())
  // console.log(numberDigits.ten.result)
  //#endregion

  // let res = newNum

  // console.log(numberDigits.hundreds.howManyFives(301))

  // console.log(newNum)
  for (let digit in numberDigits) {
    const element = numberDigits[digit]

    if (element.result(newNum) >= 1) {
      counter = counter + element.howManyFives(newNum)
      newNum = newNum - element.residue(newNum)
    }
  }

  return num - counter
}

console.log(Number.MAX_SAFE_INTEGER > 51841599744277)
console.log(dontGiveMeFive(-17, 9)) //==> 24
console.log(dontGiveMeFive(984, 4304)) // 2449
console.log(dontGiveMeFive(-4045, 2575)) // 4819
console.log(dontGiveMeFive(-4436, -1429)) // 2194

// console.log(dontGiveMeFive(40076, 215151422963990)) // 49707598394353;
// console.log(dontGiveMeFive(-206981731, 223575697903165)) // 51841599744277
// console.log(dontGiveMeFive(-90000000000000, 900000000000000)) //203349266266321
// console.log(dontGiveMeFive(-249022878360451, -249022878219653)) //79380

//#region

const getArr = (start, end) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

//#endregion

const filter = (arr) => {
  return arr.filter((item) => String(item).includes("5")).length
}

// console.log(filter(getArr(0, 1000000))) // 468559
// console.log(filter(getArr(0, 10000000))) // 5217031
// console.log(filter(getArr(0, 1000000000))) // 5217031
// console.log(filter(getArr(0, 1000000)))
// console.log(filter(getArr(0, 1000000)))
// console.log(filter(getArr(0, 1000000)))
// console.log(filter(getArr(0, 1000000)))
// console.log(filter(getArr(984, 4304))) // 872
// console.log(filter(getArr(4, 145)))

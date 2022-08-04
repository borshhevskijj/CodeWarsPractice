function dontGiveMeFive(start, end) {
  const createNumber = (start, end) => {
    if (start < 0 && end < 0) {
      start = start * -1
      end = end * -1
      ;[start, end] = [end, start]
    }
    if (start < 0 && end > 0) {
      return end - start + 1
    }
    return end - start + 1
  }

  let num = createNumber(start, end)

  let counter = 0
  let newStart = start
  let newEnd = end
  // Math.ceil(1234/ 100)*100 (===1300)-округляет сотую часть до целого
  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) {
      counter++
    }
    if (i === Math.ceil(start / 100) * 100) {
      newStart = i
      break
    }
  }

  for (let i = end; i < newStart || start; i--) {
    if (String(i).includes("5")) {
      counter++
    }
    if (i === Math.floor(end / 100) * 100) {
      newEnd = i
      break
    }
  }
  let newNum = createNumber(newStart, newEnd)
  //#region numbers
  const numberDigits = {
    millions: {
      number: 1000000,
      result: Math.trunc(newNum / 1000000),
      howManyFives: 468559,
    },
    hundredThousands: {
      number: 100000,
      result: Math.trunc(newNum / 100000),
      howManyFives: 40951,
    },
    tenThousands: {
      number: 10000,
      result: Math.trunc(newNum / 10000),
      howManyFives: 3439,
    },
    thousands: {
      number: 1000,
      result: Math.trunc(newNum / 1000),
      howManyFives: 271,
    },
    hundreds: {
      number: 100,
      result: Math.trunc(newNum / 100),
      howManyFives: 19,
    },
    tens: {
      number: 10,
      result: Math.trunc(newNum / 10),
      howManyFives: 1,
    },
  }
  //#endregion
  // console.log(numberDigits.hundreds.result * numberDigits.hundreds.number)
  console.log(
    newNum - numberDigits.hundreds.result * numberDigits.hundreds.number
  )
  // console.log(newStart, newEnd, newNum)

  if (newEnd - newStart < 100) {
    const result = []
    for (let i = newStart; i <= newEnd; i++) {
      if (String(i).includes("5")) {
        result.push(i)
      }
    }
    console.log("newStart - newEnd < 100")
    return result.length + counter
  }
  // if (newEnd - newStart > 100) {
  // }
  // console.log(newNum)
  let qwe = newNum
  let totalFives = 0

  for (let digit in numberDigits) {
    if (numberDigits[digit].result === 0) {
      // console.log(numberDigits[digit].result)
      continue
    }

    qwe = numberDigits[digit].result * numberDigits[digit].howManyFives

    totalFives = numberDigits[digit].result * numberDigits[digit].howManyFives
  }
  console.log(totalFives + counter)
  // console.log(qwe + counter)
}

// console.log(dontGiveMeFive(603, 759)) //34 пятерки
console.log(dontGiveMeFive(603, 959)) //34 пятерки
// console.log(dontGiveMeFive(-17, 9)) //==> 24
// console.log(dontGiveMeFive(1, 9)) //8
// console.log(dontGiveMeFive(4, 17)) //12  newStart=6 newEnd = 14
// console.log(dontGiveMeFive(-17, -4)) //12

//#region

const getArr = (start, end) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
// console.log(getArr(603, 959))
//#endregion
// arr(0,10000)

const filter = (arr) => {
  return arr.filter((item) => String(item).includes("5")).length
}
// console.log(filter(getArr(603, 959))) // 72

//#region
// если start(-17) отрицательный то ==>> конвертируем в положительное (17) + 1(один это чило 0) + end(9)
// зная сколько чисел с цифрой пять в сотне мы можем посчитать сколько чисел с цифрой 5 в остатке

// в одной сотне(100) 18 чисел с цифрой 5
// в одной 10ке одно число с цифрой 5
// в одной 5ке одно число с цифрой 5

//в примере dontGiveMeFive(-17, 9) получается 27 цифр из них 24 значения без цифры 5
// 27 можно разделить на 2 разряда (десятки и единицы) 2-ое десяток и 7 единиц : из них в двух десятках находится по одной в каждой и в единицах одна и того - 3

// чтобы получить десятки числа нужно Math.trunc(number/10)
// чтобы получить единицы числа нужно   Math.floor((number % 1) * Math.pow(10, n)) где n это сколько чисел взять

//#endregion

// let number = 112.45212155;
// let n = 5; //точность. Сколько брать чисел после запятой
// fractional = Math.floor((number % 1) * Math.pow(10, n));
// console.log(fractional); //45212

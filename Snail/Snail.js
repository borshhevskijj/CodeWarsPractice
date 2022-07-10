snail = function (array) {
  const result = []

  while (array[0] !== undefined) {
    if (array[0] === undefined) {
      break
    }

    const toRigth = array[0].map((item) => result.push(item))
    array.splice(0, 1)

    if (array[0] === undefined) {
      break
    }
    const toBottom = array.map((item, index) => {
      result.push(item[item.length - 1])
      array[index].splice(item.length - 1)
    })

    if (array[0] === undefined) {
      break
    }

    const toLeft = array[array.length - 1]
      .reverse()
      .map((item) => result.push(item))
    array.splice(-1, 1)

    if (array[0] == undefined) {
      break
    }

    const toTop = array.reverse().map((item, index) => {
      result.push(item[0])
      array[index].splice(0, 1)
    })

    array.reverse()
  }

  return result
}

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// )

// console.log(
//   snail([
//     [ 1,  2,  3,  4, 5,  6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ])
// )

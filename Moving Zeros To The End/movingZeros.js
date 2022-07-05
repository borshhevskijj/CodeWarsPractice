function moveZeros(arr) {
  const zerosArr = []
  const arrWOzeros = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element !== 0) {
      arrWOzeros.push(element)
    } else if (element === 0) {
      zerosArr.push(element)
    }
  }

  return [...arrWOzeros, ...zerosArr]
}

// console.log(moveZeros([1, 2, 3, 4, 0, 0, 5, 0, 6, 7, 8, 9, 10, 0, "a", "b"]))
console.log(moveZeros([1, 2, 3, 4, 0, 0, 5, 0, 6, 7, 8, 9, 10, 0, "a", "b"]))

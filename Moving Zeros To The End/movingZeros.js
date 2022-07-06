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

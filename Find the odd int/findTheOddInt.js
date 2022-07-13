function findOdd(A) {
  if (A.length === 1) {
    return A[0]
  }

  for (let i = 0; i < A.length; i++) {
    const element = A[i]
    const sameNumbers = A.filter((item) => item === element)
    if (sameNumbers.length % 2 === 1) {
      return element
    }
  }
  return -1
}
// console.log(findOdd([20, 1, 1, 4, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 5
// [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

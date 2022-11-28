function fibonacci(max) {
  let [second, first] = [1,0]
    let evenNumbersSum=0
  while ( first < max) {
    [second,first]=[first,second + first]
    if (first % 2===0 && first < max) {
      evenNumbersSum += first
    }
    }
  return evenNumbersSum
}

// console.log(fibonacci(1000)); 
// 798

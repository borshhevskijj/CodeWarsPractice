function twoSum(numbers = [], target = 0) {
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const possibleNumber = target - numbers[i];
    if (numMap.has(possibleNumber)) {
      return [numMap.get(possibleNumber), i];
    }
    numMap.set(numbers[i], i);
  }
  return [];
}

// console.log(twoSum([1, 2, 3], 4), "должно быть [0,2] ");
// console.log(twoSum([1234, 5678, 9012], 14690), "должно быть [1,2] ");

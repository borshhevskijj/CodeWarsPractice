function findOutlier(integers) {
  let evenNumCounter = 0;
  for (let i = 0; i <= 3; i++) {
    const el = integers[i];
    if (el % 2 === 0) {
      evenNumCounter++;
    }
  }
  if (evenNumCounter >= 2) {
    return integers.find((num) => Math.abs(num) % 2 === 1);
  }
  return integers.find((num) => Math.abs(num) % 2 === 0);
}

// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
// console.log(findOutlier([2, 6, 8, 10, 3])); //3

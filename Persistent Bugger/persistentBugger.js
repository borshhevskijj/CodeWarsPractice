function persistence(num) {
  let counter = 0;
  for (; num >= 10; ) {
    num = num
      .toString()
      .split("")
      .reduce((total, current) => total * +current);
    counter++;
  }
  return counter;
}

// console.log(persistence(39)); //3
// console.log(persistence(4)); //0
// console.log(persistence(25)); //2
// console.log(persistence(999)); //4

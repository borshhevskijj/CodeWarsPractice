function createPhoneNumber(numbers = []) {
  const firstPartOfPhoneNumber = numbers.slice(0, 3).join("");
  const secondPartOfPhoneNumber = numbers.slice(3, 6).join("");
  const thirdPartOfPhoneNumber = numbers.slice(6).join("");
  return `(${firstPartOfPhoneNumber}) ${secondPartOfPhoneNumber}-${thirdPartOfPhoneNumber}`;
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //(123) 456-7890")
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

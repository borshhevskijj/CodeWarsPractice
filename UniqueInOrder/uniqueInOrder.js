const uniqueInOrder = (iterable) => {
  const result = [];

  for (let i = 0; i < iterable.length; i++) {
    const element = iterable[i];
    const prevElement = iterable[i - 1];
    if (element !== prevElement) {
      result.push(element);
    }
  }

  return result;
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A','B','C','D','A','B']

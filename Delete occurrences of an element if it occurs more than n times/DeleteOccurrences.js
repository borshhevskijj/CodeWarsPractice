function deleteNth(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const arrEl = arr[i];
    let rez = result.filter((item) => item === arrEl);
    if (rez.length >= n) {
      continue;
    }
    result.push(arrEl);
  }
  return result;
}

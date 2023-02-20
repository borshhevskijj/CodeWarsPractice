// function deleteNth(arr, n) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const arrEl = arr[i];
//     let rez = result.filter((item) => item === arrEl);
//     if (rez.length >= n) {
//       continue;
//     }
//     result.push(arrEl);
//   }
//   return result;
// }

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    debugger;
    return cache[n] <= x;
  });
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log([1, 1, 3, 3, 7, 2, 2, 2]);

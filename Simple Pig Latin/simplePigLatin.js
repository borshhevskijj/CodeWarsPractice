function pigIt(str = "") {
  const arr = str.split(" ");
  let result = "";
  const regex = /[a-z]/;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el[0].toLowerCase().match(regex)) {
      result += `${el.slice(1)}${el[0]}ay `;
    } else {
      result += el;
    }
  }
  return result.trim();
}

// console.log(pigIt("Pig latin is cool")); //igPay atinlay siay oolcay
// console.log(pigIt("Hello world !")); // elloHay orldway !

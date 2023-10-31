function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }
  let n = 0;
  let w = 0;
  walk.forEach((side) => {
    switch (side) {
      case "n":
        n++;
        break;
      case "s":
        n--;
        break;
      case "w":
        w++;
        break;
      case "e":
        w--;
        break;
    }
  });
  return n === 0 && w === 0;
}

module.exports = isValidWalk;

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
// console.log(isValidWalk(["w"])); //false
// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // false

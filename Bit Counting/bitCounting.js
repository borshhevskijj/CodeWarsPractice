var countBits = function (num) {
  return num
    .toString(2)
    .split("")
    .reduce((total, current) => total + Number(current), 0);
};

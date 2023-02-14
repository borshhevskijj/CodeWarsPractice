function barista(coffees) {
  const sortedCoffees = coffees.sort((a, b) => a - b);
  const CLEANING_TIME = 2;
  return sortedCoffees.reduce(
    (total, coffee, i) =>
      total + coffee * (sortedCoffees.length - i) + CLEANING_TIME * i,
    0
  );
}
// console.log(barista([4, 3, 2]))

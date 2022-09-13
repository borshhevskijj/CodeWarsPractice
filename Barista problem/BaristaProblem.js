function barista(coffees) {
  const sortedCoffees = coffees.sort((a, b) => a - b)
  const CLEANING_TIME = 2
  return sortedCoffees.reduce(
    (total, coffee, i) =>
      total + coffee * (sortedCoffees.length - i) + CLEANING_TIME * i,
    0
  )
}
console.log(barista([4, 3, 2]), "res = 22") //2,3,4
// (4) + (4+2+3) + (3+2+2)+2
//

// первый ждет 4 минуты кофе = 4 минуты
// второй ждет 4 минуты + 2 минуты чистка + 3 минуты кофе = 9 минут всего
// третий ждет 9 минут всего + 2 минуты кофе + 2 минуты чистки = 13 минут всего
//  всех клиентов обслужили за 9+13 минут == 22 минуты

function findOddNames(list) {
  if (list.lenght <= 0) {
    return [];
  }
  return list.filter(({ firstName }) => {
    const charCodeSum = firstName.split("").reduce((total, current) => total + current.charCodeAt(0), 0);
    if (charCodeSum % 2 !== 0) {
      return true;
    }
    return false;
  });
}

const list = [
  { firstName: "Aba", lastName: "N.", country: "Ghana", continent: "Africa", age: 21, language: "Python" },
  { firstName: "EGOra", lastName: "S.", country: "Minsk", continent: "Asia", age: 139, language: "JavaScript" },
  { firstName: "Olha", lastName: "B.", country: "Grodno", continent: "Asia", age: 239, language: "Java" },
  { firstName: "Abb", lastName: "O.", country: "Israel", continent: "Asia", age: 39, language: "Java" },
];

console.log(findOddNames(list));

module.exports = findOddNames;

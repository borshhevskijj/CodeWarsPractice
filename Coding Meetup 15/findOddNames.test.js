const findOddNames = require("./findOddNames");
// import { findOddNames } from "./findOddNames";

describe("findOddNames", () => {
  test("if sum is odd", () => {
    const list = [
      // { firstName: "Aba", lastName: "N.", country: "Ghana", continent: "Africa", age: 21, language: "Python" },
      { firstName: "Era", lastName: "S.", country: "Minsk", continent: "Asia", age: 139, language: "JavaScript" },
      { firstName: "Olha", lastName: "B.", country: "Grodno", continent: "Asia", age: 239, language: "Java" },
      { firstName: "Abb", lastName: "O.", country: "Israel", continent: "Asia", age: 39, language: "Java" },
    ];
    expect(findOddNames(list)).toEqual([
      { firstName: "Abb", lastName: "O.", country: "Israel", continent: "Asia", age: 39, language: "Java" },
    ]);
  });

  test("if sum is even", () => {
    const list = [
      { firstName: "Era", lastName: "S.", country: "Minsk", continent: "Asia", age: 139, language: "JavaScript" },
      { firstName: "Olha", lastName: "B.", country: "Grodno", continent: "Asia", age: 239, language: "Java" },
    ];
    expect(findOddNames(list)).toEqual([]);
  });

  test("if list is empty", () => {
    const list = [];
    expect(findOddNames(list)).toEqual([]);
  });
});

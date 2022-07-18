function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item))
}

// console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]

function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`
  } else if (names.length === 3) {
    return `${names[0]},${names[1]} and ${names[2]} like this`
  }
  return `${names[0]},${names[1]} and ${names.length - 3} like this`
}

// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
console.log(likes(["Max", "John", "Mark"]))

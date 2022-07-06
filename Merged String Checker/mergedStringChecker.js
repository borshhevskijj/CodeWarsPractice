// function isMerge(s, part1, part2) {
//   if (s.length !== part1.length + part2.length) {
//     return "не содержит"
//   }
//   if (!s.length) {
//     return "содержит"
//   }
//   if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
//     return "содержит"
//   }
//   if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
//     return "содержит"
//   }
//   return "не содержит"
// }

function isMerge(s, part1, part2) {
  if (!s.length && !part1.length && !part2.length) {
    return true
  }
  if (s.length !== part1.length + part2.length) {
    return false
  }

  if (s[0].includes(part1[0]) && isMerge(s.slice(1), part1.slice(1), part2)) {
    return true
  }
  if (s[0].includes(part2[0]) && isMerge(s.slice(1), part1, part2.slice(1))) {
    return true
  }
  return false
}

console.log(isMerge("codewars", "code", "wars"))

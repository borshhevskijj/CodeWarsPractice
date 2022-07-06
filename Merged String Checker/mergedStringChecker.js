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

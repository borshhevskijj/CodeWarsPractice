function solution(number) {
  const numbersArray = []
  for (let i = 0; i < number; i++) {
    numbersArray.push(i)
  }

  const result = numbersArray.reduce(
    (total, current) =>
      total +
      ((current % 3 === 0 && current % 5 === 0) ||
      current % 3 === 0 ||
      current % 5 === 0 ||
      (current < 0 ?? 0)
        ? current
        : 0)
  )

  return result
}

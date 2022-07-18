function cakes(recipe, available) {
  const recipeArr = Object.keys(recipe)
  const availableArr = Object.keys(available)
  const result = []

  for (let item in recipe) {
    if (recipe[item] === undefined || available[item] === undefined) {
      return 0
    } else if (`${recipeArr.includes(availableArr[item])}`) {
      result.push(Math.floor(available[item] / recipe[item]))
    }
  }

  return Math.min(...result)
}

// let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
// let available = { sugar: 500, flour: 2000, milk: 2000 }
// // console.log(cakes(recipe, available))

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// )

function countPhotos(road) {
  let cameraCounter = 0
  let result = 0
  let rigthCarCounter = 0
  // let leftCarCounter = 0

  for (let i = 0; i < road.length; ++i) {
    const elem = road[i]

    if (elem === ">") {
      rigthCarCounter++
    }
    if (elem === "<") {
      result += cameraCounter
    }

    if (elem === ".") {
      result += rigthCarCounter
      cameraCounter++
    }
  }
  return result
}

// console.log(countPhotos(">.>..<"), "res = 8"

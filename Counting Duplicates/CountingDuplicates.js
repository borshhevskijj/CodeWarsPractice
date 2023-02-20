function duplicateCount(text) {
  text = text.toLowerCase();
  let counter = new Set([]);
  for (let i = 0; i < text.length; i++) {
    const el1 = text[i];

    for (let j = i + 1; j < text.length; j++) {
      const el2 = text[j];
      if (el1 === el2) {
        counter.add(el1);
      }
    }
  }
  return counter.size;
}
// console.log(duplicateCount("Indivisibilities"))

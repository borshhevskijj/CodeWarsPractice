function getCount(str) {
  return (Array.from(str.matchAll(/[aeiou]/g)) || []).length;
}
// console.log(getCount("abracadabra"));
// console.log(getCount("xyz"));

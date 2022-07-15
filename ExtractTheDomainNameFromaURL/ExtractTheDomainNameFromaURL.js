function domainName(url) {
  const filtredURL = url.replace(/^(?:https?:\/\/)?(www\.)?/, "")
  const regExp = /[^\.]*/
  const result = filtredURL.match(regExp)
  return result[0]
}

// console.log(domainName("https://www.2ev8iq5f4d1f.fr/default.html"))
// console.log(domainName("http://google.com"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("http://www.google.co.jp"))
// console.log(domainName("https://www.ayc7bz2jdm-fdnmwy467rz657f.org"))

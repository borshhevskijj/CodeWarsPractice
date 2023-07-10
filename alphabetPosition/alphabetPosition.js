const getAlphabetPosition = (char = "") => {
  return char.charCodeAt() - 96;
  // 96- это столько нужно отнять чтобы получить a:1,b:2 и т.д
};
function alphabetPosition(text = "") {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if (!(element.toLowerCase() === element.toUpperCase())) {
      result += `${getAlphabetPosition(element)} `;
    }
  }
  return result.trim();
}
alphabetPosition("The sunset sets at twelve o' clock.");

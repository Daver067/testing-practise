function capitalize(string) {
  let splitString = string.split("");
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join("");
}
module.exports = capitalize;

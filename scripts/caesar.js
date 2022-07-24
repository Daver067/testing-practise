function caesarCipher(str, shiftAmount) {
  let splitStr = str.split("");
  let returnArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (caesarArray.indexOf(splitStr[i]) !== -1) {
      let index = caesarArray.indexOf(splitStr[i]);
      while (index + shiftAmount > 25) {
        index -= 26;
      }
      while (index + shiftAmount < 0) {
        index += 26;
      }
      returnArray.push(caesarArray[index + shiftAmount]);
    } else if (capitalCaesarArray.indexOf(splitStr[i]) !== -1) {
      let index = capitalCaesarArray.indexOf(splitStr[i]);
      while (index + shiftAmount > 25) {
        index -= 26;
      }
      while (index + shiftAmount < 0) {
        index += 26;
      }

      returnArray.push(capitalCaesarArray[index + shiftAmount]);
    } else returnArray.push(splitStr[i]);
  }
  return returnArray.join("");
}

const caesarArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const capitalCaesarArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

module.exports = caesarCipher;

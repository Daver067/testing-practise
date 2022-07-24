function analyzeArray(arr) {
  let returnObj = {};
  returnObj.average = average(arr);
  returnObj.min = minimum(arr);
  returnObj.max = max(arr);
  returnObj.length = arr.length;
  return returnObj;
}

function average(arr) {
  let arrTotal = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return arrTotal / arr.length;
}

function minimum(arr) {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue < currentValue ? previousValue : currentValue;
  });
}

function max(arr) {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue > currentValue ? previousValue : currentValue;
  });
}
module.exports = analyzeArray;

const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ('the parameter is not an Array');
  }
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '--discard-next' || arr[i] === '--discard-next') {
      continue;
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1 && arr[i + 1] !== '--discard-prev' && arr[i + 1] !== '--double-prev' && arr[i + 1] !== '--discard-next') {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        newArr.splice(newArr.indexOf(arr[i - 1], newArr.length - 1), 1);
      } 
    } else if (arr[i] === '--double-prev') {
      if ( i !== 0 && arr[i - 2] !== '--discard-next') {
        newArr.push(arr[i - 1]);
      }  
    } else {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
};

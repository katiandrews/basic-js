const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ('the parameter is not an Array');
  }
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i - 1] === '--discard-next') {
      continue;
    } else if (arr[i] === '--double-next') {
      if (i + 1 >= arr.length || arr[i + 1] === '--discard-prev' || arr[i + 1] === '--double-prev') {
        continue;
      } else {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (i - 1 < 0 || arr[i - 2] === '--discard-next' || arr[i - 1] === '--discard-next') {
        continue;
      } else {
        newArr.splice([i - 1], 1);  
      }
    } else if (arr[i] === '--double-prev') {
      if ( i - 1 < 0 || arr[i - 2] === '--discard-next' || arr[i - 1] === '--double-next') {
        continue;
      } else {
        newArr.push(arr[i - 1]);
      }
      
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

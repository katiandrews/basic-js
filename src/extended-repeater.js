const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let additionStr;
  //1st check if addition exist
  if (options.addition !== undefined) {
    let arr = [];
    options.addition = String(options.addition);
  //add option.addition if it exist
    additionStr = options.addition;

  //repeat addition as many times as propery says and push it to an array;
    if (options.additionRepeatTimes) {
      for (i = 1; i <= options.additionRepeatTimes; i++) {
        arr.push(options.addition);
      }
      //add separator between addition, default or custom
      if (options.additionSeparator !== undefined) {
      additionStr = arr.join(`${options.additionSeparator}`);
    } else {
      additionStr = arr.join('|');
    }
    }
  //add addition to string;
    str += additionStr;

  }
  //check if string should be repeated and repeat with separator
  if (options.repeatTimes) {
    let array = [];
    for (i = 1; i <= options.repeatTimes; i++) {
      array.push(str);
    }
    if (options.separator !== undefined) {
      str = array.join(`${options.separator}`);
    } else {
      str = array.join('+');
    }
  }
  return str;
};
  
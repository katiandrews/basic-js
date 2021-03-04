const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {
    turns: (2 ** disksNumber) - 1,
    seconds: 0
  };
  answer.seconds = Math.floor(answer.turns / turnsSpeed * 3600);
  return answer;
};

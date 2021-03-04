const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
  return false;
 }
 let arr = [];
 for (i = 0; i < members.length; i++) {
   if (typeof members[i] == "string") {
     members[i] = members[i].trim();
     members[i] = members[i].toUpperCase();
     arr.push(members[i][0]);
   }
 }
  return arr.sort().join('');
};

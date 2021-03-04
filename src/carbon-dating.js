const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if (!sampleActivity || typeof sampleActivity  !== "string" || !Number(sampleActivity)) {
  return false;
 }
sampleActivity = Number(sampleActivity);
if (sampleActivity < 0 || sampleActivity > 15) {
  return false;
}
let k = 0.693 / HALF_LIFE_PERIOD;
let lnN = Math.log(MODERN_ACTIVITY/sampleActivity);
return Math.ceil(lnN/k);
};

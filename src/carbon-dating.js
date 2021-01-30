const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false;
  }
  if (sampleActivity * 1 !== 0) {
    return false;
  }
  if ((sampleActivity > 0) && (sampleActivity <= 50)) {
    let appr = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / Math.log(2));
    console.log(appr);
    return appr;
  } else {
    return false;
  }
};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }
  if ((options.addition == undefined) && (options.addition !== null)) {
    options.addition = "";
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  let repstr = "";
  for (i = 0; i < options.repeatTimes; i++) {
    repstr = repstr + str;
    for (j = 0; j < options.additionRepeatTimes; j++) {
      if (j < options.additionRepeatTimes - 1) {
        repstr = repstr + options.addition + options.additionSeparator;
      } else if (i < options.repeatTimes - 1) {
        repstr = repstr + options.addition + options.separator;
      } else {
        repstr = repstr + options.addition;
      }
    }
  }
  return repstr;
}
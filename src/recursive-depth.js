const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.some((el) => (el instanceof Array))) {
      return 1 + this.calculateDepth(arr.flat());
    } else {
      return 1;
    }
  }
};

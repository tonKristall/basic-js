const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  for (i = 1; i < disksNumber + 1; i++) {
    turns = turns * 2 + 1;
  }
  let seconds = Math.trunc(turns * 3600 / turnsSpeed);
  return { turns, seconds };
}

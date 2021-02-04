const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
  let drivemass = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  let trarr = [];
  for (i = 0; i < arr.length; i++) {
    if (drivemass.indexOf(arr[i]) >= 0) {
      if (drivemass.indexOf(arr[i + 1]) >= 0) {
        i++;
      } else {
        if (arr[i] == "--discard-prev") {
          if (trarr.length != 0) {
            trarr.pop();
          }
        } else if ((arr[i] == "--double-next") && (i != arr.length - 1)) {
          trarr.push(arr[i + 1]);
          trarr.push(arr[i + 1]);
          i++;
        } else if (arr[i] == "--double-prev") {
          if (trarr.length != 0) {
            trarr.push(arr[i - 1]);
          }
        } else if (arr[i] == "--discard-next") {
          if (i != arr.length - 1) {
            if (arr[i + 2].toString().includes('-prev')) {
              i = i + 2;
            } else { i++; }
          }
        }
      }
    }
    else {
      trarr.push(arr[i]);
    }
  }
  return trarr;
}
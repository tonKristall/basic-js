const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  let name = "";
  let massletters = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let letters = members[i].trim().split("");
      massletters.push(letters[0].toUpperCase());
    }
  }
  massletters.sort();
  for (i = 0; i < massletters.length; i++) {
    name = name + (massletters[i]);
  }
  return name;
}

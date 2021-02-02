const CustomError = require("../extensions/custom-error");

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  decrypt(message, key) {
    if ((!message) || (!key)) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key = key + key;
    }
    let decr = "";
    let j = 0;
    for (i = 0; i < message.length; i++) {
      if (letters.indexOf(message[i]) >= 0) {
        let posdec = (letters.indexOf(message[i]) - letters.indexOf(key[j]) + 26) % 26;
        decr = decr + (letters[posdec]);
        j++;
      } else {
        decr = decr + message[i];
      }
    }
    return decr;
  }
  encrypt(encryptedMessage, key) {
    if ((!encryptedMessage) || (!key)) {
      throw new Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    if (!this.mode) {
      encryptedMessage = encryptedMessage.split("").reverse().join("")
    };
    while (key.length < encryptedMessage.length) {
      key = key + key;
    }
    let encr = "";
    let j = 0;
    for (i = 0; i < encryptedMessage.length; i++) {
      if (letters.indexOf(encryptedMessage[i]) >= 0) {
        let posdec = (letters.indexOf(encryptedMessage[i]) + letters.indexOf(key[j])) % 26;
        encr = encr + (letters[posdec]);
        j++;
      } else {
        encr = encr + encryptedMessage[i];
      }
    }
    if (!this.mode) {
      encr = encr.split("").reverse().join("")
    };
    return encr;
  }
}
module.exports = VigenereCipheringMachine;

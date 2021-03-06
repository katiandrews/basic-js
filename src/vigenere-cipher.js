const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {

  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Error!');
    }
    //
    for (i = 0; i < message.length; i++) {
      if (charCodeAt(message[i]) >= 65 && charCodeAt(message[i]) <= 90) {
        i % key.length;
      } else if (charCodeAt(message[i]) >= 97 && charCodeAt(message[i]) <= 122 ) {

      }
    }
  }    
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Error!');
    }
  }
}

module.exports = VigenereCipheringMachine;

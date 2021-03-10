const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Error!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let currentKeyIndex = 0;
    let encrypted = '';
    
    for (i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) { //letter A-Z
        let letterCode = message.charCodeAt(i) - 65; //number 0-25
        let keyLetterCode = key.charCodeAt(currentKeyIndex) - 65; //number 0-25
        encrypted += String.fromCharCode((letterCode + keyLetterCode) % 26 + 65);
        currentKeyIndex = (currentKeyIndex + 1) % key.length; //if message[i] is a letter, than we shift keyIndex to next key symbol;
      } else {
        encrypted += message.charAt(i);
      }
    }
    if (this.type === false) {
      return encrypted.split('').reverse().join('');
    }
    return encrypted;
  }    
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Error!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let currentKeyIndex = 0;
    let decrypted = '';
    
    for (i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) { //letter A-Z
        let letterCode = encryptedMessage.charCodeAt(i) - 65; //number 0-25
        let keyLetterCode = key.charCodeAt(currentKeyIndex) - 65; //number 0-25
        if (letterCode - keyLetterCode >= 0) {
          decrypted += String.fromCharCode(Math.abs(letterCode - keyLetterCode) % 26 + 65);
        } else {
          decrypted += String.fromCharCode(91 + (letterCode - keyLetterCode)% 26);
        }
        currentKeyIndex = (currentKeyIndex + 1) % key.length; //if message[i] is a letter, than we shift keyIndex to next key symbol;
      } else {
        decrypted += encryptedMessage.charAt(i);
      }
    }
    if (this.type === false) {
      return decrypted.split('').reverse().join('');
    }
    return decrypted;
  }
}

module.exports = VigenereCipheringMachine;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(command = true){
    this.command = command
  }
  encrypt(message,key) {
    if (!message ||!key){
      throw new Error("Incorrect arguments!");
    }
    let str = message
    let spaces = []
    for (let i =0; i<str.length; i++){
      if(str[i]==" "){
        spaces.push(i)
    }
    }
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let finalStr = ""
    let charsObj = new Object()
    key = key.toUpperCase()
    str = str.toUpperCase().replaceAll(" ","")
    for (let i = 0 ;i<chars.length ; i++){
      charsObj[chars[i]] = i
   }
    for (let j = 0; j<str.length;j++){
      let x = (charsObj[str[j]]+charsObj[key[j%key.length]])%chars.length
      if (!x && x!==0){
        x = str[j]
      }else {
        x = chars[x]
      }
      finalStr +=x
    }
      for (let i = 0 ; i<spaces.length;i++){
        for (let j = 0 ; j<finalStr.length;j++){
          if (j == spaces[i]){
            finalStr = finalStr.slice(0,j)+" "+finalStr.slice(j,finalStr.length)  
          }
        }
      }
      if (this.command == true ){return finalStr}

  }
  decrypt(encryptedMessage,key) {
    if (!encryptedMessage ||!key){
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

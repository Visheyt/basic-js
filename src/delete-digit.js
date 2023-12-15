const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = String(n).split("")
  let deleteNumber = Math.min(...number)
  let newString = ""
  count = 0
  for (let i of number){
    if (Number(i)!==deleteNumber){
      newString+=i
      
    }else {
      count++
    }
    if (count==1){
      deleteNumber = -100
    }
  }
  return Number(newString)
}

module.exports = {
  deleteDigit
};

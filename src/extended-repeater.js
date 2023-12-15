const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes,separator= '+',addition ="",additionRepeatTimes="",additionSeparator="|"} = options
  let newArr = Array(repeatTimes).fill(String(str))
  let additionArr = Array(additionRepeatTimes).fill(String(addition))
  for (let i = 0 ; i<additionArr.length ; i++){
    if (i>0){
      additionArr[i] = `${additionSeparator}${additionArr[i]}`
    }
  }
  for (j = 0 ; j < newArr.length ; j++){
    if (j>0){
      newArr[j] = `${separator}${newArr[j]}`
      newArr[j] += `${additionArr.join("")}`
    }else{
      newArr[j] += `${additionArr.join("")}`
    }
  }
  return newArr.join("")
 }

module.exports = {
  repeater
};

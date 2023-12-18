const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr.filter(e=>e!==-1)
  sortedArr.sort((a,b)=>a-b)
  let newArr = []
  for (let i = 0 ; i<arr.length;i++){
    if (arr[i]!==-1){
      newArr.push(0)
    }else{newArr.push(-1)}
  }
  for (let j = 0 ;j<sortedArr.length;j++){
    for (let q = 0 ;q<newArr.length;q++){
      if (newArr[q]==0){
        newArr[q] = sortedArr[j]
        break
      }
    }
  }
  return newArr
}

module.exports = {
  sortByHeight
};

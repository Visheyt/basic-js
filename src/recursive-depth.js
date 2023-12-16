const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr,x = 1) {
    let stop = true
    let count = x
    for (let i = 0 ; i<arr.length ; i++){
      if (Array.isArray(arr[i])){
        arr =  arr.flat()
        count+=1
        stop = false
      }
    }
    if (stop == false){
      return this.calculateDepth(arr,count)
    }else {
      return count
    }
    
  }
}
const depthCalc = new DepthCalculator()
module.exports = {
  DepthCalculator
};

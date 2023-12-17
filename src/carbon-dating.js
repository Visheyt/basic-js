const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  if (!sampleActivity || typeof sampleActivity!== "string" || !Number(sampleActivity)||Number(sampleActivity)>5730 || Number(sampleActivity)>15||Number(sampleActivity)<0){
    return false
  }
  let finalNum = Math.ceil((Math.log(15/Number(sampleActivity)))/(0.693/5730))
  return finalNum
}

module.exports = {
  dateSample
};

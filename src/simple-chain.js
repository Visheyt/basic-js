const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (position<1){
      this.chain=[]
      throw new Error("You can\'t remove incorrect link!")
    }else if(position>this.chain.length-1){
      this.chain=[]
      throw new Error("You can\'t remove incorrect link!")
    }else if(!Number(position)){
      this.chain=[]
      throw new Error("You can\'t remove incorrect link!")
    }
    this.chain = this.chain.filter((e,i)=>i!==position-1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finishResult = this.chain.join("~~")
    this.chain = []
    return finishResult
  }
};

module.exports = {
  chainMaker
};

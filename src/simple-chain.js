const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
      return this;
    }
    this.chain.push(`( ${value} )`);
    return this;
    
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length - 1 || position <= 0) {
      this.chain = [];
      throw new Error ('Error');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chain.join('~~');
    this.chain = [];
    return arr;
  }
};

module.exports = chainMaker;

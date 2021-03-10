const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let totalDepth = 1
      
    arr.forEach(item =>{
    let depthLevel = 1;
      if (Array.isArray(item)){
        depthLevel = depthLevel + this.calculateDepth(item);
        if(depthLevel > totalDepth){
          totalDepth = depthLevel;
        }
      }
  })
    return totalDepth;
  }
};
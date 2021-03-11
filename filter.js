// Filter does transformation on the array and returns a new array of same length based on the condition

function filter(callback) {
    // Check 1 - Check whether incoming array is underfined or null
    if (this === undefined || this === null) {
      // this points to your array
      throw new TypeError(`
                  Array.prototype.reduce is called on a null value
              `);
    }
  
    // Check 2 - Check whether callback is a function or not
    if (!callback || typeof callback !== "function") {
      throw new TypeError(`
              ${callback} is not a function
              `);
    }
    // Check 3 - Reduce on empty array with no initial Value
    if (!this.length) {
      if (arguments.length < 2) {
        throw new TypeError(`
              Reduce is called on an empty array with no initial Value`);
      } else if (arguments.length === 2) {
        return initialValue;
      }
    }
  
    let result = []; // map will return a new array here
  
    for (var index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)){ // check for condition
            result.push(this[index]) // push the item which true for the condition
        }
    }
  
    return result; // return the new array
  }
  
  module.exports = filter;
  
  Array.prototype.customFilter = filter;
  
 const filteredArray = [1, 2, 3].customFilter((item) => item > 1);
  
 console.log(filteredArray)
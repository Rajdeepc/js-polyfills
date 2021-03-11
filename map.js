// map does transformation on the array and returns a new array of same length

function map(callback) {
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
    result.push(callback(this[index], index, this)); // push the result of each callback inside results
  }

  return result; // return the new array
}

module.exports = map;

Array.prototype.customMap = map;

console.log([1, 2, 3].customMap((item) => item + 100));

// [ 101, 102, 103 ]
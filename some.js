// some method finds some element in the array which matches a condition and returns a boolean

function some(callback) {
  // Check 1 - Check whether incoming array is underfined or null
  if (this === undefined || this === null) {
    // this points to your array
    throw new TypeError(`
                  Array.prototype.some is called on a null value
              `);
  }

  // Check 2 - Check whether callback is a function or not
  if (!callback || typeof callback !== "function") {
    throw new TypeError(`
              ${callback} is not a function
              `);
  }

  return !!this.filter(callback).length; // changing the length to boolean, if 0 == false 1 == true
}

module.exports = some;

Array.prototype.customSome = some;

console.log([100, 102, 103].customSome((item) => item > 100));
// true 
console.log([100, 102, 103].customSome((item) => item > 105));
// false 

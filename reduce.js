// Reduce method executes a reducer function on each element and gives out a single output.

function reduce(callback, initialValue) {
  // a reduce method takes a callback function and a initialValue
  // check for Error Cases first

  // Check 1 - Check whether incoming array is underfined or null
  if (this === undefined || this === null) { // this points to your array
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
    } else if(arguments.length === 2){
        return initialValue
    }
  }

  // implementing the reduce

  var i = 0;
  var acc = initialValue; // setting accumulator to the initialValue

  if (arguments.length < 2) {
    acc = this[acc++];
  }

  while (i < this.length) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      acc = callback(acc, this[i], i, this);
    }
    i++;
  }
  return acc;
}


module.exports = reduce;

Array.prototype.customReduce = reduce




const sum = (s, v) => s + v;
const callerArray = [1, 2, 3];
const output = callerArray.customReduce(sum, 1);
console.log(output);

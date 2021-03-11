// creating a forEach polyfill

// A forEach loop doesnt mutate the array but itereates on the entire array and  doesnt return anything

function forEach(callback) {
  // Check 1 - Check whether incoming array is underfined or null
  if (this === undefined || this === null) {
    // this points to your array
    throw new TypeError(`
                Array.prototype.forEach is called on a null value
            `);
  }

  // Check 2 - Check whether callback is a function or not
  if (!callback || typeof callback !== "function") {
    throw new TypeError(`
            ${callback} is not a function
            `);
  }


  for (var index = 0; index < this.length; index++) {
    callback(this[index], index, this); // calls callback recursively with currentValue, currentIndex and the whole array
  }
}

module.exports = forEach;

Array.prototype.customForEach = forEach;

[1, 2, 3].customForEach((item) => console.log(item + 100));

// 101
// 102
//103
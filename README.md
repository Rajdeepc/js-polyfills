# A List of JavaScript Polyfills for Higher Order Functions

This project is basically for all the JavaScript Enthusiasts who wants to learn how JavaScript Higher Order Functions like .map(),
.filter() , .reduce(), .find(), .forEach() works under the hood.

This list covers:

## 1. Creating a Polyfill of .map() method.

```JavaScript
// map does transformation on the array and returns a new array of same length

function map(callback) {
  // Check 1 - Check whether incoming array is underfined or null
  if (this === undefined || this === null) {
    // this points to your array
    throw new TypeError(`
                Array.prototype.map is called on a null value
            `);
  }

  // Check 2 - Check whether callback is a function or not
  if (!callback || typeof callback !== "function") {
    throw new TypeError(`
            ${callback} is not a function
            `);
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
```
## 2. Creating a Polyfill of .filter() method.

```JavaScript
    // Filter does transformation on the array and returns a new array of same length based on the condition

function filter(callback) {
    // Check 1 - Check whether incoming array is underfined or null
    if (this === undefined || this === null) {
      // this points to your array
      throw new TypeError(`
                  Array.prototype.filter is called on a null value
              `);
    }
  
    // Check 2 - Check whether callback is a function or not
    if (!callback || typeof callback !== "function") {
      throw new TypeError(`
              ${callback} is not a function
              `);
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
```

## 3. Creating a Polyfill of .reduce() method.

```JavaScript
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




const add = (s, v) => s + v;
const callerArray = [1, 2, 3];
const output = callerArray.customReduce(add, 1);
console.log(output);
```
### 4. Creating a Polyfill of .find() method.

```JavaScript
// find method runs over the array and find the object which matches the condition

function find(callback) {
  // Check 1 - Check whether incoming array is underfined or null
  if (this === undefined || this === null) {
    // this points to your array
    throw new TypeError(`
                  Array.prototype.find is called on a null value
              `);
  }

  // Check 2 - Check whether callback is a function or not
  if (!callback || typeof callback !== "function") {
    throw new TypeError(`
              ${callback} is not a function
              `);
  }


  let result = []; // map will return a new array here

  for (var index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      // check for condition
      result = this[index]; // push the item which true for the condition
      return result;
    }
  }

  // return the new array
}

module.exports = find;

Array.prototype.customFind = find;

const findObject = [1, 2, 3].customFind((item) => item > 1 && item < 3);

console.log(findObject);
```
## 5. Creating a Polyfill of .forEach() method.

```JavaScript
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
// 103
```
## 6. Creating a polyfill for some() method

```JavaScript
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
```

Feel free to open a PR. I would be happy to merge it.

License: MIT <br>
Feel free to use this code in production
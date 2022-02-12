//  use arrow functions to write concise anonymous functions
const magic = () => new Date(); // var magic function () { return new Date();};  */ // same thing

// arrrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

// write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squareIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
// console.log(squareIntegers);

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
// console.log(increment(5, 2));
// console.log(increment(5));

// differences between the var and let keywords
let catName = "quincy";
let quote;

catName = "beau";

function catTalk() {
  "use strict";

  catName = "oliver";
  quote = catName + " say meow";
}
// console.log(catTalk());

// compare scopes of var and let keywords
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    // console.log("block scope i is: ", i);
  }
  // console.log("function scope i is: ", i);
  return i;
}
// console.log(checkScope());

// read=only variable with const keyword
function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + "is cool";
  // sentence = str + " is amazing!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
// printManyTimes("caz");

// mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
// console.log(s);

// prevent object mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(" Cannot assign to read only property 'PI' of object ");
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
// console.log(PI);

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

// rest operator (function parameters)
const sum2 = (function () {
  return function sum2(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum2(1, 2, 3, 4));

// use the spread operator to evaluate arrays in-place

const arr2 = ["jan", "feb", "mar", "apr", "may"];
let arr3;
(function () {
  arr3 = [...arr2];
  arr2[0] = "potato";
})();
// console.log(arr3);

//use destruction assignment to assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

/* old way
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
*/
// new way
// const { x: a, y: b, z: c } = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// destructuring assignment with nested objects

const LOCAL_FORCAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}
// console.log(getMaxOfTmrw(LOCAL_FORCAST));

// use destructuring assignment to assign variables from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let t = 8,
  j = 6;
(() => {
  "use strict"[(t, j)] = [j, t];
})();
// console.log(t);
// console.log(j);

// destructuring assignment with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arry] = list;

  return arry;
}
const arry = removeFirstTwo(source);
// console.log(arry);
// console.log(source);

// // destructuring assignment to pass an object as a function's parameters

const stats = {
  max: 56.78,
  standaed_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
// console.log(stats);
// console.log(half(stats));

// create strings using template leterals
const person = {
  name: "jotson",
  age: 24,
};

const ageCheck = `hello mr ${person.name}, your age is ${person.age} right?`;
// console.log(ageCheck);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// write concise object literal declaration using simple fields
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender,
});
// console.log(createPerson("jotson tembo", 24, "male"));

// write concise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
bicycle.setGear(3);
// console.log(bicycle.gear);

// use class syntax to define a constructor function
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("jupiter");
// console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
// console.log(carrot.name);

// use getters and setters to control access to an objec
function makeClass2() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    // getter
    get temperature() {
      return this._temp;
    }
    // setter
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}
const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
// console.log(temp);

// difference between import and require
// import { capitalizeString } from "./test";
// const cap = capitalizeString("hello!");
// console.log(cap);

// use export to resuse a code block
// const capitalizeString2 = (str) => {
// return str.CharAt(0).toUpperCase() + String.slice(1);
// };

//export { capitalizeString2 };
// export const foo = "bar2";
// export const bar = "foo2";

// use * to import everything from a file
// import * as capitalizeStrings from "./test";

// create an export fallback with export defualt
// export default function subtract(x, y) {
//   return x - y;
// }

// import a default export
// import substract2  from 'math_functions'

// returning boolean values from functions
function isLess(a, b) {
  return a < b;
}
// console.log(isLess(17, 15));

// reterning early pattern from functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
// console.log(abTest(-2, 2));

// counting cards
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "j":
    case "q":
    case "k":
    case "a":
      count--;
      break;
    default:
      break;
  }
  var holdbet = "hold";
  if (count > 0) {
    holdbet = "bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc("k");
cc(10);
cc("k");
cc("a");

// console.log(cc(2));

// build javascript objects
var ourDog = {
  name: "camper",
  legs: 4,
  tails: 1,
  freinds: ["everything!"],
};

// accessing object properties with dot notation
var nameValue = ourDog.name;
var numOfLegs = ourDog.legs;

// console.log("name :", nameValue + " and " + "number of legs :", numOfLegs);

// accessing object properties with bracket notation
var numOfFreinds = ourDog["freinds"];
var numOfTails = ourDog["legs"];

// console.log("freinds :", numOfFreinds + " and " + "number of tails :", numOfTails);

// accessing object properties with variables
var testObj = {
  12: "caz",
  16: "jot",
  19: "maz",
};

var playerNumber = 16;
var player = testObj[playerNumber];

// updating object properties

ourDog.name = "happy camper";
// console.log(ourDog);

// add new properties to an object
ourDog.bark = "bow-bow"; //  or ourDog['bark] = 'bow-bow'
// console.log(ourDog);

// delete properties from an object
delete ourDog.bark;
// console.log(ourDog);

// using objects for lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "adams",
    bravo: "boston",
    charlie: "chicago",
    delt: "denver",
    echo: "easy",
    foxtrot: "frank",
  };
  result = lookup[val];
  return result;
}
// console.log(phoneticLookup("foxtrot"));

//  testing objects for properties
function checkObj(checkProp) {
  var lookup = {
    alpha: "adams",
    bravo: "boston",
    charlie: "chicago",
    delt: "denver",
    echo: "easy",
    foxtrot: "frank",
  };

  if (lookup.hasOwnProperty(checkProp)) {
    return lookup[checkProp];
  } else {
    return "not found";
  }
}
// console.log(checkObj("hello"));

// manipulating complex objects
var myMusic = [
  {
    artist: "bill joel",
    title: "piano mas",
    release_year: 1993,
    formats: ["cd", "8t", "lp"],
    gold: true,
  },
  {
    artist: "beau carnes",
    title: "cereal man",
    release_year: 2003,
    formats: ["youtube vide"],
  },
];

// accessing nested objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"];
// challenge => find total of repeating values
// console.log(gloveBoxContents);

// accessing nested arrays

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dabdelion"],
  },
  { type: "trees", list: ["fir", "pine", "birch"] },
];

var secondTree = myPlants[1].list[1];
// console.log(secondTree);

// record collection
var collection = {
  2548: {
    album: "slippery when wet",
    artist: "bon jovi",
    tracks: ["let it rock", "you give love a bad name"],
  },
  2468: {
    album: "1999",
    artist: "prince",
    tracks: ["1999", "little red corvette"],
  },
  1245: {
    album: "robert palmer",
    tracks: [],
  },
  5439: {
    album: "abba gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439, "artist", "abba"));

// iterate with while loops
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
// console.log(myArray);

// iterate with loops
var ourArray = [];
for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}
// console.log(ourArray);

// iterate odd number with a for loop
var ourArray3 = [];

for (var i = 1; i < 10; i += 2) {
  // for even numbers => (var i = 0; i < 10; i += 1)
  ourArray3.push(i);
}
// console.log(ourArray3);

// count backwards with loops
var ourArray4 = [];
for (var i = 9; i > 0; i -= 2) {
  // for even numbers => (var i = 10; i > 0; i -= 2)
  ourArray4.push(i);
}
// console.log(ourArray4);

//iterate through an array with a for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
// console.log(ourTotal);

// nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// console.log(product);

// iterate with do ...while loops
var myArr = [];
var i = 10;

do {
  myArr.push(i);
  i++;
} while (i < 5);
// console.log(i, myArr);

// profile lookup
var contacts = [
  {
    firstName: "akira",
    lastName: "laine",
    number: "057835287832",
    likes: ["pizza", "coding", "brownie points"],
  },
  {
    firstName: "jot",
    lastName: "tembo",
    number: "90668567676",
    likes: ["cars", "food", "dogs"],
  },
  {
    firstName: "caz",
    lastName: "terk",
    number: "0898686757",
    likes: ["God", "software", "coding"],
  },
];

function lookupPrifle(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "no such property";
    }
  }
  return "no such contact";
}

var data = lookupPrifle("caz", "hello");
// console.log(data);

// genrate random fractions
function randomFraction() {
  return Math.random();
}

// console.log(randomFraction());

// genrate random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
// console.log(randomWholeNum());

// generate random whole numbers within a range

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
// console.log(ourRandomRange(1, 9));

// use the parseInt function

function convertToInteger(str) {
  return parseInt(str);
}
// console.log(convertToInteger("56"));

//  use thr parseInt function with a radix

function convertToInteger2(str) {
  return parseInt(str, 2);
}
// console.log(convertToInteger2("10011"));

// use the conditional (ternary) operator
function checkEqual(a, b) {
  /* if (a === b) {
    return true;
  } else {
    return false;
  }  => */
  return a === b ? true : false;
}

// use mutiple conditional (ternary) operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
// console.log(checkSign(0));

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

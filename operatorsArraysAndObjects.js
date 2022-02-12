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

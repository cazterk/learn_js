//----------functions----------//

function ourReusableFunction() {
  console.log("what up what up");
}

ourReusableFunction();

// arrow function
const arrowFunction = () => {
  console.log("this is an arrow fuction");
};

arrowFunction();

// passing values to fuctions with arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 5);

// global scoping and functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefine") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefine") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// local scope and functions
function myLocalScope() {
  var myLocalVar = 5;
  console.log(myLocalVar);
}
myLocalScope();

// global vs local scope in functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

//console.log(myOutfit());
//console.log(outerWear);

// Return a value from a function with return
function minusSeven(num) {
  return num - 7;
}
// console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
// console.log(timesFive(5));

// understanding undefined value returned from a function
var sum = 0;
function addThree() {
  sum += 3;
}
// console.log(addThree());

// assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);
// console.log(changed);

// stand in line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// boolean values
function welcomeToBooleans() {
  return false;
}

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

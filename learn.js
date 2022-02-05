/* undefines, null, boolean, string, symbol, number, and object */

var myName = "Caz";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

var a;
var b = 10;
var c = "string";

a = 7;

b = a;

console.log(a); //run => ctrl + alt + n

a = a + 1; // same as 'a += 1'
b = b + 5;
c = c + "string2";

// declarations
var studyCapVar;

// adding
var sum = 10 + 10;

// subtraction
var difference = 45 - 33;

// multiplying
var product = 5 * 5;

// dividing
var quotient = 66 / 33;

// incrementing
var myVar = 7;
myVar++;

// decrementing
var myVar2 = 8;
myVar2--;

// decimal numbers
var ourDecimal = 5;

var myDecimal = 2;

//console.log("remainder:", ourDecimal % myDecimal);

// compound assignment
(a += 12), (a -= 12), (a *= 12), (a /= 12);

//declare string variables
var firstName = "caz";
var lastName = "terk";

// escaping literal quotes in strings
var myStr = 'I am a "double quoted" string inside "double quotes" ';

// escaping sequences
var myStr2 = "FirstLine\nSecondLine\nThirdLine";

// concatenating strings with plus operator
var strConc = "first. " + "second.";

// concatenating strings with plus equals operator
var ourStr = "first. ";
ourStr += "second.";

// constructing strings with variables
console.log(firstName + lastName + " is the name");

// appending variables to strings
var str3 = "awesome";
var ourStr3 = "God is ";
ourStr3 += str3;

// find lenght of string
console.log("lenth:", str3.length);

// bracket notation: find nth character in string
console.log("index of letter :", str3[0]);

// string immutability
var myStr3 = "jello world";
myStr3 = "hello word";

// bracket notation: find last character in string even when lenght is unknown
console.log("last letter of", str3, "is", `'${str3[str3.length - 1]}'`);

// bracket notation: find nth-to-last character in string
console.log("nth-to-last of", str3, "is", `'${str3[str3.length - 3]}'`);

// word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "the " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//----------arrays----------//

// store multiple values with arrays
var ourArray = ["caz", 24];

// nested arrays
var nestArr = [
  ["one", 2],
  ["two", 1],
  ["three", 9],
  ["four", 4],
  [1, 2, 3, 5, 3, 23, 3],
  13,
  14,
];

// access array data with indexes
var ourArray2 = [1, 2, 3, 4];

// modify array data with indexes
ourArray2[1] = 5;

// access multi-demensional arrays with indexs
var myData = nestArr[3][1];
console.log(myData);

// manipulate arrays with push()
ourArray2.push(["abc", "hi"]);

// manipulate arrays with pop()
var removeFromOurArray = ourArray2.pop();

// manipulate arrays with shift()
var removeFromOurArray = ourArray2.shift();

// manipulate arrays with unshift()
ourArray2.unshift("way");
console.log(ourArray2);

// shopping list

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["yougurt", 2],
  ["juice", 1],
  ["bananas", 4],
];

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

// conditional logic with if statements
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "is true";
  }
  return " is false";
}
// console.log(ourTrueOrFalse(false));

// comparison with the equality operator

function testEqual(val) {
  if (val == 12) {
    return "equals";
  }
  return "!equals";
}
// console.log(testEqual(10));

// comparion with the strict equality operator
function testStrict(val) {
  if (val === "10") {
    return "equals";
  }
  return "not equals";
}
// console.log(testStrict(10));

// practice comparing different values
function compareEquality(a, b) {
  if (a == b) {
    //  but '===' returns 'not equals'
    return "equals";
  }
  return "not equals";
}
// console.log(compareEquality(10, "10"));

// comparison with the inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "not equal";
  }
  return "equal";
}
// console.log(testNotEqual(10));

// comparison with strict inequality operator
function testStrictNotEqual(val) {
  if (val !== "10") {
    return "not equal";
  }
  return "equals";
}
// console.log(testStrictNotEqual("10"));

// comparisons with the logical and operatior

function testGreaterThan(val) {
  if (val > 100) {
    return "over 100";
  }

  if (val > 10) {
    return "over 10";
  }
  return "10 0r under";
}
//console.log(testGreaterThan(10));

//comparison with the greater than or equal to operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }

  if (val >= 10) {
    return "10 or over";
  }
  return "less than 10";
}
// console.log(testGreaterOrEqual(100));

// comparision with the less than operator
function testLessThan(val) {
  if (val < 25) {
    return "under 25";
  }
  if (val < 55) {
    return "under 55";
  }
  return "55 or over";
}
// console.log(testLessThan(10));

// comparision with the less than or equal to operator
function testLessOrEqal(val) {
  if (val <= 12) {
    return "smaller or equal to 12";
  }

  if (val <= 24) {
    return "smaller or equal to 24";
  }
  return "more than 24";
}
// console.log(testLessOrEqal(10));

// comparision with the logical and operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }
  return "no";
}
// console.log(testLogicalAnd(10));

// comparision with the logical or operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return " outside";
  }
  return "inside";
}
// console.log(testLogicalOr(11));

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

// else statements

function testElse(val) {
  if (val > 5) {
    result = "bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
// console.log(testElse(12));

// else if statements
function testElseIf(val) {
  if (val > 10) {
    return "greater than 10";
  } else if (val < 5) {
    return "smalller than 5";
  } else {
    return "between 5 and 10";
  }
}
// console.log(testElseIf(7));

//logical order in if else statements
function orderMylogic(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "greater than or equal to 10";
  }
}
// console.log(orderMylogic(3));

// chaining if else statements
function testSize(num) {
  if (num < 5) {
    return "tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "large";
  } else {
    return "huge";
  }
}
// console.log(testSize(7));

// golf code
var names = [
  "hole-in-one",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go home",
];
function golfScore(strokes, par) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
// console.log(golfScore(8, 5));

// switch statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
// console.log(caseInSwitch(4));

//  default option in switch statements
function switchOfStuff(key) {
  var answer = "";
  switch (key) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
// console.log(switchOfStuff(2));

//  multiple identical options in switch statements

function sequentialSize(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;

    default:
      break;
  }
  return answer;
}
// console.log(sequentialSize(6));

// replacing if else chains with switch
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      answer = "marley";
      break;
    case 42:
      answer = "the answer";
      break;
    case 1:
      answer = "there is no #1";
      break;
    case 99:
      answer = "missed me by this much!";
      break;
    case 7:
      answer = "ate nine";
      break;

    default:
      break;
  }
  return answer;
}
// console.log(chainToSwitch("bob"));

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

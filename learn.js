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

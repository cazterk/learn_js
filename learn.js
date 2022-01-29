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
console.log(firstName + lastName);

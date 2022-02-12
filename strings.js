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

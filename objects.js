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

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

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

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

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

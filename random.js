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

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
// console.log(ourRandomRange(1, 9));

// returning boolean values from functions
function isLess(a, b) {
  return a < b;
}
// console.log(isLess(17, 15));

// returning early pattern from functions
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

// switch statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
// console.log(caseInSwitch(4));

//  default option in switch statements
function switchOfStuff(key) {
  var answer = "";
  switch (key) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
// console.log(switchOfStuff(2));

//  multiple identical options in switch statements

function sequentialSize(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;

    default:
      break;
  }
  return answer;
}
// console.log(sequentialSize(6));

// replacing if else chains with switch
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      answer = "marley";
      break;
    case 42:
      answer = "the answer";
      break;
    case 1:
      answer = "there is no #1";
      break;
    case 99:
      answer = "missed me by this much!";
      break;
    case 7:
      answer = "ate nine";
      break;

    default:
      break;
  }
  return answer;
}
// console.log(chainToSwitch("bob"));

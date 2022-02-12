// difference between import and require
import { capitalizeString } from "./test";
const cap = capitalizeString("hello!");
console.log(cap);

// use export to resuse a code block
const capitalizeString2 = (str) => {
  return str.CharAt(0).toUpperCase() + String.slice(1);
};

export { capitalizeString2 };
export const foo = "bar2";
export const bar = "foo2";

// use * to import everything from a file
import * as capitalizeStrings from "./test";

// create an export fallback with export defualt
export default function subtract(x, y) {
  return x - y;
}

// import a default export
import substract2 from "math_functions";

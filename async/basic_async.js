import fetch from "node-fetch";

let a = 1;
let b = 2;
setTimeout(() => {
  console.log("timeout: " + a);
}, 1000);

a = 10;

fetch("https://jsonplaceholder.typicode.com/posts/1").then(() => {
  console.log("fetch");
});
console.log("synchronous");
console.log(a);
console.log(b);

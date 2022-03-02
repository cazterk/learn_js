import fetch from "node-fetch";
import { title } from "process";

const url = "https://jsonplaceholder.typicode.com/posts/1";

// fetch(url)
//   .then(isStatus200)
//   .then(getPostJson)
//   .then((json) => console.log(json))
//   .catch((err) => {
//     console.Error("an error has occurred", err);
//   });

function isStatus200(res) {
  if (res.status === 200) {
    return res;
  } else {
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}

function getPostJson(res) {
  return res.json();
}

function getTitle(post) {
  console.log("getting title");
  return post.title;
}

function echoTitle(title) {
  console.log(title);
}

// bad news - nott returning, nesting, and not catching
fetch(url)
  .then(isStatus200)
  .then((result) => {
    console.log("result....");
    getPostJson(result).then((post) => getTitle(post));
  })

  .then((title) => echoTitle(title));

// better news - terminate chain with catch, flatten
// fetch(url)
//   .then(isStatus200)
//   .then((result) => {
//     console.log("result.....");
//     return getPostJson(result);
//   })
//   .then(getTitle)
//   .then(echoTitle)
//   .catch((err) => console.error(err));

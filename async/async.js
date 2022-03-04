import fetch from "node-fetch";

const posts = [
  { tite: "one", body: "body one" },
  { tite: "two", body: "body two" },
];

const getPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.tite}</li>`;
      });

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("error : something went wrong");
      }
      document.body.innerHTML = output;
    }, 1000);
  });
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("error: something went wrong");
      }
    }, 2000);
  });
};

const init = async () => {
  await createPost({ tite: "three", body: "body three" });

  getPosts();
};

// init();

//async await with fetch

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.table(data);
};

fetchUsers();

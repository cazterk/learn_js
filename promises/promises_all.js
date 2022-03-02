const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "hello");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "world");
});

const p3 = 1000;

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error("Promise.all rejection ", err);
//   });

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Promise.race rejection ", err);
  });

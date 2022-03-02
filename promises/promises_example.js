let allGood = false;

// define promise
//can be in one of three states
// - pending   | hasn't settled to a value yet
// - fulfilled | settled successfully (calling resove())
// - reject    | settles unsuccessfully (calling reject())
let fetchSomeData = new Promise((resolve, reject) => {
  if (!allGood) {
    reject("error fetching data");
  } else {
    resolve({
      id: 1,
      message: "nice work",
    });
  }
});

// consume a promise
fetchSomeData
  .then((fetchedData) => {
    console.log("then: ", fetchedData);
  })
  .catch((err) => {
    console.error("catch :", err);
  });

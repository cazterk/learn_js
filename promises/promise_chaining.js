// simulate fetching data
let fetchData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("processing data complete");
      resolve({ id: 1, message: "nice work" });
    }, 2000);
  });
};

// parse the data
let parseData = function (data) {
  return new Promise((resolve, reject) => {
    foo = bar;
    setTimeout(() => {
      let parseOutput = `parsed the data for id: ${data.id} with message: ${data.message}`;
      resolve({ parsed: parseOutput });
    }, 2000);
  });
};

// echo the data
let echoData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data.parsed);
    }, 2000);
  });
};

// chaining the promises
fetchData()
  .then(parseData)
  .then(echoData)
  .catch((err) => {
    console.error(err);
  });

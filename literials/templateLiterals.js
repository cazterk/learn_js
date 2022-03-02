// create strings using template literals
const person = {
  name: "jotson",
  age: 24,
};

const ageCheck = `hello mr ${person.name}, your age is ${person.age} right?`;
// console.log(ageCheck);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// write concise object literal declaration using simple fields
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender,
});
// console.log(createPerson("jotson tembo", 24, "male"));

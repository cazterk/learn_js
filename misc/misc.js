let x = {
  a: 1,
  b: 2,
};

let Arr = [];
for (let i in x) {
  Arr.push(i);
}
console.log(Arr);
let c = "hi";
let y = "ih";

const revStr = (str) => str.split("").reverse().join("");
console.log(revStr(c) === y);

let x2 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.a);
  },
};

console.log(x2.getA().getB());

function foo() {
  return 5;
}

let myvar = foo;

console.log(myvar);

let arr = [1, 2, 5, 9, 4];

// check sum indexes
const checkSum = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === num) return [i, j];
    }
  }
};

console.log(checkSum(3, arr));

// sum of array elements
const sum = (...args) => {
  let total = 0;
  args.forEach((x) => (total += x));
  return total;
};
console.log(sum(1, 2, 3));

const fact = (n) => (n ? n * fact(n - 1) : 1);
const functioral = (...args) => {
  const filterArr = args.filter((x) => x != 1 && x != 0);
  let factArr = filterArr.map(fact);

  return factArr;
};
console.log("fact :", functioral(0, 1, 2, 3, 4));

const findMStr = (str) => {
  let len = str.length;
  let middleStr = parseInt(len / 2, 10);
  return str[middleStr];
};

let arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 15, 20, 21, 25, 26, 30, 33, 35];
let arrValue = arr2.values();

const mOfFiveOrThree = (args) => {
  let filteredArr = args.filter((x) => (x = x % 3 && x % 5) == 0);
  let sum = 0;
  filteredArr.forEach((x) => (sum += x));
  return sum;
};

// Log to console
console.log("filtered :", mOfFiveOrThree(arr2));

const compStr = (str1, str2) => {
  let res = [];
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str2[i])) {
      res.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      res.push(str2[i]);
    }
  }
  return res.join("");
};

console.log(compStr("abvds", "abvswews"));

// array opts
const users = [
  {
    id: 1,
    name: "Dan",
    age: 21,
    isActive: true,
  },
  {
    id: 2,
    name: "Sam",
    age: 25,
    isActive: true,
  },
  {
    id: 3,
    name: "Ben",
    age: 30,
    isActive: false,
  },
];
const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((x) => x.name);

console.log("names ", names);

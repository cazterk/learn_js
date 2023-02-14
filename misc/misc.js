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

const findMStr=(str)=>{
  let len = str.length 
  let middleStr= parseInt(len/2, 10)
return (str[middleStr])
}

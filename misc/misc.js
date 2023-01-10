
let x ={
  a:1,
  b:2
}

let Arr = []
for (let i in x){
  Arr.push(i)
}
console.log(Arr)
let c = 'hi'
let y = 'ih'

const revStr=(str) => str.split('').reverse().join('')
console.log((revStr(c) ===y))

let x2={
  a:1,
  b:2,
  getA(){
    console.log(this.a)
    return this
  },
  getB(){
    console.log(this.a)
  }
}

console.log(x2.getA().getB())


function foo(){
  return 5
}

let myvar = foo

console.log(myvar)

let arr = [1,2,5,9,4]

const checkSum = (num, arr) =>{
  for(let i = 0; i< arr.length; i++){
    for(let j = 0; j< arr.length; j++){
      let sum =  arr[i] + arr[j]
      if(sum === num) return [i, j]
    }
  }
}

console.log(checkSum(3, arr))

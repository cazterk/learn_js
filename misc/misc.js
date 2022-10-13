
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

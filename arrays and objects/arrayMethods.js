const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
];

const numbers = [1, 2, 3, 4, 5];

// filter method
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.table(items);
console.table(filteredItems);

// map method
const mappedItems = items.map((item) => {
  return item.price;
});
console.log(mappedItems);

// find method
const findItems = items.find((item) => {
  return item.price === 100;
});
console.log(findItems);

// foreach method
items.forEach((item) => {
  console.log(item.price);
});

// some method
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 0;
});
console.log(hasInexpensiveItems);

// every method
const everyItmMetd = items.every((item) => {
  return item.price <= 1000;
});
console.log(everyItmMetd);

// reduce method
const totalPrice = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(totalPrice);

// includes
const includesTwo = numbers.includes(2);
console.log(includesTwo);

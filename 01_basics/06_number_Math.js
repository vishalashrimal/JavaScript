const score = 100
// console.log(score);

const anotherScore = new Number(100)
// console.log(anotherScore);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 223.8966
// console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.min(7,3,2,8,1));
// console.log(Math.max(7,3,2,8,1));

// console.log(Math.round(3.6));
// console.log(Math.floor(3.8))
// console.log(Math.ceil(3.2))

console.log(Math.random());
console.log(Math.round((Math.random()*6) +1)); //Mostly Used In Dice 1-6


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

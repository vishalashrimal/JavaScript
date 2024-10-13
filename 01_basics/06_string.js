let name  = "Vishal"
let age = 21

// console.log(name + age + " Value");

// console.log(`my name is ${name} and my age is ${age}`);

const gameName = new String ("Vishal-Shrimal-21")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-14 ,6 )
// console.log(anotherString);

const newStringOne = "   vishal   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://vishal.com/vishal%20shrimal"

console.log(url.replace('%20','-'));

console.log(url.includes('vishal '))

console.log(gameName.split('-'))

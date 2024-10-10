// Primitive 

// 7 Types :- String, Number, null, undefined, boolean, bigInt, Symbol

const score = 80
const scoreValue = 80.10

const isLoggedIn = false

const outsideTemp = null 

// let userEmail; undefined
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 223221243567443556n


// Reference(Non Primitive)

//Array, Objects, Functions

const heros = [ "ShaktiMan", "Nagraaj", "Doga"];

let obj ={
    name : "Vishal",
    age : 21,
}

let myFunction = function(){
    console.log("Hello WOrld !");
}

// console.log(typeof bigNumber)


// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  Heap(Non-Premitive)

let myName = "Vishal"

let anotherName = myName;
anotherName = "Akash"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne ;

userTwo.email = "vishalshrimal030@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



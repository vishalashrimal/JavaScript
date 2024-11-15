// Math.PI

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const chai ={
    name : "Masala Chai",
    price : 50,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name",{
    // writable : false,
    enumerable : true
})
// // console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// note: 1. "Object.entries(chai)" use to make object iterable means to make it editable
//2. enumerable : means you Allow to make it iterable

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}




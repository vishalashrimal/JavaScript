// Array

//Initialization
const myArray =[1,2, 7, 4, 5, 6]
const heros = ["Thor", "Hulk", "Iron man", "Spider-Man"]
const myArr = new Array(0,1,2,3,4,5)

// console.log(myArray[2]);
// console.log(heros)
// console.log(myArr);


//Array Methods

// myArr.push(6)
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));


// const newArray = myArr.join()
// console.log(myArr)
// console.log(newArray);


const myn1 = myArr.slice(1,3)
console.log("A", myArr)
console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
// function myfun(){
//     console.log("Vishal Shrimal");
// }
// myfun()

// function calculator(num1, num2){        //(para1, para2)
//     console.log(num1 + num2);
// }
// const result = calculator(4,4)
// console.log("Result : ", result)


function calculator(num1, num2){
    let result = (num1+num2)
    return result 
}

// const result = calculator(3,4)
// console.log("Result: ", result)


function loginUserMessage(username){
    return`${username} just Logged in`;
}
// console.log(loginUserMessage("Vishal"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,456,252));

const user={
    username : "Vishal",
    price : 999
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`); 
}

// handleObject(user);
handleObject({
    username : "Akash",
    price : 300
})


const myArray = [200,400,100,600]

function returnSecondValue(myArr){
    // return myArr;
    return myArr[1];
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,200,654,234]));


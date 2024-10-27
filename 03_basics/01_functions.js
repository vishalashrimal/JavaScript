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
console.log(loginUserMessage("Vishal"));
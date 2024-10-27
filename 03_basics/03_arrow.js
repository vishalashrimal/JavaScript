// "this" shows the current context

const user = {
    username : "Vishal",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the Website`)
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Vishal"
//     console.log(this.username);   //Return Undefined or cant use in function 
// }
// chai();

// const chai = function(){
//     let username = "Vishal"
    // console.log(this.username);      //Return Undefined or cant use in
// }
// chai();

// const arrowFun = () => {
//     let username = "Vishal"
//     // console.log(this); 
// }
// // arrowFun();



// const calculator = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(calculator(5,6));

// const calculator = (num1, num2) => num1 + num2; // Implicite Return or no need of "return"
// console.log(calculator(5,6));

// const calculator = (num1, num2) => ( num1 + num2 );   // This is Implcite Return

const calculator = (num1, num2) => ({username : "Vishal"});
console.log(calculator(5,6)); 


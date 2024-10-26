// singleton :-
// Object.create     //constructor method

//Object Literals :- 

const mySym = Symbol("key1")

const JsUser = { 
    name: "Vishal",
    "full name" : "Vishal Shrimal",
    [mySym]: "myKey1",  ///IMP Symbol Defininng
    age: 18,
    location: "Pune",
    email: "vishalshrimal030@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email =  "Vishalshrimal@google.com";  // To Change Email

// Object.freeze(JsUser);
JsUser.email ="vishal@yahoo.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User")
} 

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

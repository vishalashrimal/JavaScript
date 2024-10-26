// const tinderUser = new Object()   // This is singleton Object
const tinderUser = {}                // This is not singleton Object 

tinderUser.id = 21
tinderUser.name ="Vishal"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 


const regularUser = {
    userFullName : { 
        userName : { 
            firstName : "Vishal",
            lastName : "Shrimal"
        }
    }
}
// console.log(regularUser.userFullName.userName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1,obj2,obj3);
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id : 0,
        email : "vishal@google.com",
    },
    {
        id : 1,
        email : "vishal@google.com",
    },
    {
        id : 2,
        email : "vishal@google.com",
    },
    {
        id : 3,
        email : "vishal@google.com",
    },
    {
        id : 4,
        email : "vishal@yahoo.com",
    }
]

// console.log(users[4].email);


// console.log(Object.keys(tinderUser)); //Output returns into Array
// console.log(Object.values(tinderUser));    //Output returns into Array
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

// console.log(regularUser.hasOwnProperty('userFullName'));




// Important Functions or Methods =
// 1. hasOwnProperty()       // To check name is available or not
// 2. Object.keys(tinderUser)       To Access keys
// 3. Object.entries(tinderUser)    To Access Values 
// 1. users[4].email                To access with index value




//+++++++++++++++++++DeStructure+++++++

const course = {
    courseName : "Js Course",
    price : "999",
    courseInstructor : "Vishal"
} 

// const {courseInstructor} = course;
// console.log(courseInstructor);

const{courseInstructor: instructor} = course 
console.log(instructor);



// {
//     courseName : "Vishal Tv",
//     price : "free"
//     name : "Vishal"
// }

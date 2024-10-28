// if

const temprature = 41
if(temprature === 40 ){
    // console.log("Temp is Less Than 50")
}
else{
    // console.log("Temprature is grater than 50");
}


// < , > , <= , >=, !=, ===


// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// const balance = 1000
// if(balance>500) console.log("test");    // implicite Scope

// if(balance<500){
//     console.log("Balance is less than 500");
// }else if(balance<750){
//     console.log("Balance is less than 750");
// }
// else {
//     console.log("Balance is less than 1200");
// }


const userLoggedIn = true
const debbitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if(userLoggedIn && debbitCard){
    console.log("Allow to buy course");    
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
    
}

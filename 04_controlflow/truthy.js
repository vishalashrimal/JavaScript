const userEmail = []

if(userEmail){
    console.log("Got the User Email");
}
else{
    console.log("Don't have userE Email");
    
}


//Falsy Values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values

//"0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const ObjEmpty = {}
// if(Object.keys(ObjEmpty).length === 0){
//     console.log("Object is Empty"); 
// }


// +++++++++++++++ Nullish CoaleScing Operator (??) : Null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 20

// console.log(val1);


//Terniary Operator

// condition ? true : false     //Syntax

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater Than 80");
 


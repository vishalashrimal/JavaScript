//for

const num = 10
for (let i = 0; i < num; i++) {
    if(i == 5){
        // console.log("5 is best number");
        
    }
    // console.log(i);
}

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop : ${i}`);
    
    for(let j = 1;j <= 10; j++){
        // console.log(`Inner loop: ${j}`);
        // console.log(i + " * " + j + " = " + i*j)
        
    }
}

let myArray = ["flash", "batsman", "Superman"]

for(let i = 0;i<myArray.length; i++){
    const element = myArray[i];
    // console.log(element)
}


// Break and Continue


// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log("Detected");
//         break;
//     }
//     console.log(`Value of i: ${i}`);   
// }
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected");
        continue;
    }
    console.log(`Value of i: ${i}`);   
}
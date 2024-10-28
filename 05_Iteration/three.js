// forof

let arr=[1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}

let greeting = "Hello World!"
for(const greet of greeting){
    if (greet == " "){
        continue
    }
    // console.log(`Each char is ${greet}`);
}


const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")
// console.log(map);

for(const [key, value] of map){
    // console.log(key, " :- ", value);
    
}

const myObject ={
    game1 : "BGMI",
    game2 : "FF"
}

// for(const [key, value] of myObject){
//     console.log(key,value);      //NOT WORKING FOR OBJECT
    
// }
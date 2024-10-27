let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30 // dont use Var
    // console.log("Inner : ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Vishal"
    
    function two(){
        const website = "Youtube"
        // console.log(username); 
    }
    // console.log(website);     Cant Acces Out Of Scope
    two()
}
// one()


if(true){
    const username = "Vishal";
    if(username === "Vishal"){
        const website = " instagram"
        // console.log(username + website);
        
    }
    // console.log(website); 
}
// console.log(username);


// +++++++++++++++++++++++++++ Interesting Tricks +++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1;
}


const addTwo = function (num){
    return num + 2
}
addTwo(6)
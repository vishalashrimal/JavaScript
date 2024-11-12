//creating promise
const promiseOne = new Promise(function(resolve, reject){
    // Do async tasks
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000) 
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000) 
}).then(function(){
    console.log('Async task Resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Vishal', email : 'vishal@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const Error = true

        if(!Error){
            resolve({username : 'Vishal', password : 123})
        }else{
            reject('Error: Something went Wrong')
        }
    },1000)
}) 

promiseFour.then(function(user){
    return user.username
}).then(function(){
    console.log(username);  
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolver or rejected")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        const Error = false
        if(!Error){
            resolve({username : 'Javascript', password:123})
        }else{
            reject('Error : Js went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);  
    }
}
consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error)
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => {
    console.log(error);
})





// promise is an object
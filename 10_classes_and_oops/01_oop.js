const user = {
    username : 'vishal',
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user deatails from Database");
        // console.log(`username : ${this.username}`);
        console.log(this)        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new User("vishal", 8, true)
const userTwo = new User('hitesh', 12, false)
console.log(userOne.constructor);
// console.log(userTwo);


// step 1: new = whenever we use 'new' keyword the empty object is created which is called "Instance"

//step 2 : constructor function call by 'new' keyword. It wrap argument to use it 

// step 3 : this - this inject that arguments which created by constructor

// in last step we can use that arguments




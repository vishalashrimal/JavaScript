//Call passes curent execution context to another function

function SetUsername(username){
    //Complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username);

    this.email= email
    this.password = password
}

const userOne = new createUser("Vishal", "vishal@fb.com" , 123)
console.log(userOne);

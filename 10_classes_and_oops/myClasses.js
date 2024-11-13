class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}abc`
    }

    changeUsername(){
        return  `${this.username.toUpperCase()}`
    }
}

const chai = new User("Vishal", "vishal@gmail.com", 123)

console.log(chai.encryptPass());
console.log(chai.changeUsername());


// behind the Scene 
 
function newUser (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

newUser.prototype.encryptPass = function(){
    return `${this.password}abc`
}

newUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new newUser("tea", "tea@gmail.com", 123)

console.log(tea.encryptPass());
console.log(tea.changeUsername());
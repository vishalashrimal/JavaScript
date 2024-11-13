class User{
    constructor(username){
        this.username = username
    }

    static createId(){
        return Math.floor(Math.random()*100 + 1)
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

const vishal = new User("Vishal")

// console.log(vishal.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email =email
    }
}

const iphone = new Teacher("Iphone", "iphone@ios.com")
// iphone.logMe();

console.log(iphone.createId());

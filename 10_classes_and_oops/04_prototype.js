let myName = "Vishal     "

// console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeros = ["Thor", "spiderman"]

let heroPower={
    thor : "Hamor",
    spider : "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spider}`);
    }
}

Object.prototype.vishal = function(){
    console.log("Vishal is presents in all objects");
}

// heroPower.vishal();

// myHeros.vishal();

Array.prototype.heyVishal= function(){
    // console.log("Hello Vishal")
}

myHeros.heyVishal();
// heroPower.heyvishal();



//++++++++++++++++++++ Inheritance ++++++++++++++++=

let user = { 
    name : "Vishal",
    email : "vishal@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport= {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "Js Assignment",
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__= user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher);

/* Notes : teachingSupport acces the property of Teacher

method  = myUser
property = myUser()
*/


const anotherName = "ChaiAurCode      "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherName.truelength();
"vishal".truelength();
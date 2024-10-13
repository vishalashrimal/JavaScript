// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 9, 11)
// console.log(myCreateDate.toDateString())
// let myCreateDate = new Date(2024, 9, 11, 5, 10)
// let myCreateDate = new Date("2024-10-11")
let myCreateDate = new Date("01-14-2023")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());    //Calculated in Miliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay());

// `${new.Date.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
})
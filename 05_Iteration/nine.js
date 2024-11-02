const myNums = [1, 2, 3]

// const Total = myNums.reduce(function (accumulator, currValue) {
//     // console.log(`acc : ${accumulator}, currValue: ${currValue}`);
//     // return accumulator + currValue}, 0)

// const Total = myNums.reduce((accumulator,currValue) => accumulator + currValue,0)

// console.log(Total);


const shoppingCart = [
    {
        courseName : "Web Dev Course",
        price : 2999
    },
    {
        courseName : "Data Science Course",
        price : 12999
    },
    {
        courseName : "Android Dev Course",
        price : 5999
    },
    {
        courseName : "Py Course",
        price : 999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);


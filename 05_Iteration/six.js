// const coding = ["js", "ruby", "python", "Java", "cpp"]

// const value = coding.forEach( (key) =>{
//     // console.log(key);
//     return key 
// })
// console.log(value);


// const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

// // const newNum = numbs.filter((num) => {
// //     return num > 4
// // })


// const newNum = []
// numbs.forEach( (num) =>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const books = [
    {title : 'Book one', genre:'Fiction', publish:1981, edition:2004},
    {title : 'Book two', genre:'Non-Fiction', publish:1992, edition:2008},
    {title : 'Book three', genre:'History', publish:1999, edition:2007},
    {title : 'Book four', genre:'Non-Fiction', publish:1989, edition:2010},
    {title : 'Book five', genre:'Science', publish:2009, edition:2014},
    {title : 'Book six', genre:'History', publish:1986, edition:1996},
    {title : 'Book seven', genre:'Fiction', publish:1987, edition:2010},
    {title : 'Book eight', genre:'Science', publish:2011, edition:2016},
    {title : 'Book nine', genre:'Non-Fiction', publish:1981, edition:1989}
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish > 2000
})
console.log(userBooks);

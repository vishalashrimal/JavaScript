const marvel_heros =  ["IronMan", "Hulk", "Thor", "Spider-man"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][1])


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//Concator Spread array function
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], [7], [6, 7, [4, 5]]]

const real_anotherArray = anotherArray.flat(Infinity);
// console.log(real_anotherArray);

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name: "Vishal"}));  //Intersting question in Interview


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
 


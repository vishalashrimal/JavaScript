const myObject = {
    'js' : "Javascript",
    'cpp' : "C++",
    'rb' : "ruby",
    'swift' : "Swift by apple" 
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "Java", "ruby", "Py", "cpp"]
for(const key in programming){
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")

for(const key in map){
    console.log(key);
    //Map is not Iteratable
}
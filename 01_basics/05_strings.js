const name = "Rutuja"
const number = 50

// console.log(name + number + "Value");// old syntax

// console.log(`Hello my name is ${name} and my repo count is ${number}`);//new syntax

const gameName = new String('Ma-rio')//declare string using objects

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,3)
// console.log(newString);

// const anotherString = gameName.slice(-3);
// console.log(anotherString);

const name1 = "  Rutuja  ";
console.log(name1.trim());

const url = "https://rutuja.com/rutuja%20kdm"; 
console.log(url.replace('%20', '-'));

console.log(url.includes('rutuja'));
console.log(gameName.split('-'));
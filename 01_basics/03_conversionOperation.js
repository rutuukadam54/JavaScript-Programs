let score = "33abc"
console.log(typeof score); //number
//so lets convert the above score into string by using " "
// after using "33" the typeof score will be string
// converting string to number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber) // this will be in number
console.log(valueInNumber) // this will print NaN means not a number

//"33" => 33
//"33abc" =>NaN
//true => 1; fale =>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true ; 0 => false
//" " => false
//"Rutuja" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// **************Operation************
let value =3
let negvalue = -value
console.log(negvalue)
//console.log(2**3) ; 2 to power 3

let str ="hello"
let str1 = " Rutuja"
let str3 = str + str1
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
console.log(+"")

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

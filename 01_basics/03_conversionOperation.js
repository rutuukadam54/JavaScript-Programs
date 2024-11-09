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
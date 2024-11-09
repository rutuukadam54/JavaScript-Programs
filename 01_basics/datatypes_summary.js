//Primitive datatypes

// 7 types : String, Number, Boolean, null, undefine, symbol, bigint

//JavaScript is a dynamically typed language.
/*
You do not need to declare the data type of a variable when you create it. The type of the variable is determined at runtime, based on the value it is assigned.
Variables in JavaScript can hold values of any data type, and you can change the type of a variable during the program's execution.
*/
const name = "Rutuja";
const number = 18;
const email = null;
let phoneNo ;
const id = Symbol('123');
const anotherId = Symbol('123'); //here Id and anotherId is not same.
const bigNumber = 121687845668n;


// Reference (Non primitive)
// Arrays , Objects, Functions: typeof these datatypes are always object

//arrays
let heros = ["shaktiman" , "naagraj", "doga"];

//object
let myObj = {
    name: "Rutuja",
    age:22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

//to check the datatype use:
console.log(typeof number);

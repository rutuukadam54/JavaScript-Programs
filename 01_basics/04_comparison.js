console.log("2" > 1);
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// The reason is that an equality check == and comparisons >,<,>=,<= work differently 
// comparisons convert null to a number treating it as 0.
// that's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0); // gives false value

//=== strict check
console.log("2" === 2) // it does not convert string to a number like(==)

const name = "Vinay";
const age = 24;

console.log("My name is " + name + " and I am " + age + " years old.");
// My name is Vinay and I am 24 years old.
// this is the old way of doing it, now we have template literals in js, which is better way of doing it
// template literals are enclosed in backticks (`) instead of quotes (' or ")
// this is also called "string interpolation", it is more famous name of it.

console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Vinay and I am 24 years old.
//this method is more readable and better at production level

console.log(name[0]); // V
console.log(name[1]); // i

console.log(name.__proto__); // String.prototype, this is the prototype of string, it has all the methods of string
console.log(name.__proto__.__proto__); // Object.prototype, this is the prototype of object, it has all the methods of object

console.log(name.toUpperCase()); // VINAY, this is the method of string, it converts the string to upper case
console.log(name.toLowerCase()); // vinay, this is the method of string, it converts the string to lower case

console.log(name.charAt(2)); // n, this is the method of string, it returns the character at the given index
console.log(name.indexOf("i")); // 1, this is the method of string, it returns the index of the given characterOr string
//to check the different method of string, go to browser, declare a string and print it
// you can see the methods of string in the console, it will show you all the methods of string

//copying substring from the string
let str = name.substring(0, 4); // variable_name.substring(start_index, end_index + 1)

let url = "https://www.hiteish%20code.com";

console.log(url.replace("%20", " ")); // https://www.hiteish code.com, this is the method of string, it replaces the given string with the given string
console.log(url.includes("hiteish")); // true, this is the method of string, it checks if the given string is present in the string or not

console.log(url.split("/", 2)); // [ 'https:', 'www.hiteish%20code.com' ], this is the method of string, it splits the string into array of strings, based on the given string
// it takes two arguments, first is the string to split and second is the number of splits to be made

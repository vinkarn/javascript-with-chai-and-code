let score = 33;
let scoreString = "33"; // this is score saved in string

console.log(typeof score);
console.log(typeof scoreString);

let numValueOfScoreString = Number(scoreString);

console.log(typeof numValueOfScoreString);
//it has been converted to number

let a = null;
console.log(typeof a); // null is an object in js, but null is not an object in reality
console.log(Number(a)); // null is converted to 0 when converted to number
//so keep in check that null is not converted to number in case of server or calculation error
//for example, if you are getting null from server, it means there is no value, so you should not convert it to number
//if are getting temparature from server, and it is null(some error occured), it means there is no temperature, so you should not convert it to number

let b = undefined;
console.log(typeof b); // undefined is a datatype in js, the type of undefined is undefined

let c = "hey";
console.log(Number(c)); // NaN, not a number,

//boolean conversion
// any value in string is true, except empty string
let d = Boolean(c); // true, because c is not empty string
console.log(d); // true
//a single space in string is also true, because it is not empty string
let e = ""; // empty string
console.log(Boolean(e)); // false, because e is empty string

//controversial part of javascript
//the JavaScript Operations,
//string to string operations
//string to number operations, it will be interesting to see how js will handle it
//Mathematical operations
console.log(2 + 2); //4
console.log(2 - 1); //1
console.log(2 * 2); //4
console.log(2 / 2); //1
console.log(2 % 2); //0, remainder of 2/2 is 0
console.log(2 ** 2); //4, 2 to the power of 2 is 4
let str1 = "hello";
let str2 = " vinay";

//string operations(concatenation)
let str3 = str1 + str2; // string concatenation
console.log(str3); // hello vinay

//string with number operations
let str4 = "1";
let num = 2;
console.log(str4 + num); // 12, string concatenation, because str4 is string and num is number, so js will convert num to string and concatenate it
console.log(num + str4); // 21, string concatenation, because num is number and str4 is string, so js will convert num to string and concatenate it

console.log("1" + 2); // 12, string concatenation
console.log(1 + "2"); // 12, string concatenation, because 1 is number and "2" is string, so js will convert 1 to string and concatenate it

console.log("1" + 2 + 2); //122, string concatenation, because "1" is string and 2 is number, so js will convert 2 to string and concatenate it
console.log(1 + 2 + "2"); //32, num addtion and thn string concatenation                 b

console.log(1 + 2); // 3, number addition, because both are numbers

// note code like is not appriciated in programming and profesional world, this is just for understanding the concept
// so don't use this kind of code in your projects, it will create confusion and bugs in your code
//such code is not readable and not maintainable, so avoid it
//in professional world, such code is not even

//there are 6 comparison operators in JavaScript
// 1. == (equal to), <, >, <=, >=, != there working is very similar to other languages]

console.log("2" > 1);
// true, because "2" is converted to number and compared with 1

console.log("02" > 1);
// true, because "02" is converted to number and compared with 1
//it wont give error or Nan, because js is very flexible in this case

//usually dont trust js in this case, because it is not strict in this cases
//it is better to use === and !== instead of == and !=, because it is strict in this case

console.log(null > 0); // false, because null is converted to 0 and compared with 0
console.log(null == 0); // false, because null is not equal to 0
console.log(null >= 0); // true, because null is converted to 0 and compared with 0

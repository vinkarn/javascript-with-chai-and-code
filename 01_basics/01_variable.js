console.log("hello, world!");

const accountId = 12345;
let accountEmail = "vinay@google.com";
var accountPassword = "12345";//not used now, bcoz of absence of block scope 
// accountCity = "Punjab";//cannot be declared in this way now. WE need let or var in front

// accountId = 234; //cannot be updated. It is a constant


console.log(accountId);

accountEmail = "karan@google.com";
accountPassword = "2342";
// accountCity = "Jammu";

console.log(accountId, accountEmail, accountPassword);//either we can print data this way
// or we can use table to print data in table format

console.table([accountId,  accountEmail, accountPassword]);//or this method for printing data
//it is much clear and better for data representation
//array is passed in .table function

/*prefer not to use 'var'

ONLY use LET and CONST

as var dont have the ability or property of block scope
that means if we have a variable of name 'a', and later on i declare another variable with same name 'a'
then the value of original variable will be altered.
And this was a major problem in js 
thus let was introduced into the js   
*/
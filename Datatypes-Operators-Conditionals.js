/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log('1. The main datatypes in javascript are Number (that can mean whole numbers or numbers with decimal places)');
console.log('String (words or sentences of letters/numbers or symbols), boolean (has 2 values: true or false)');
console.log('undefined which means the variable has not been assigned a value yet and null which is similar to undefined except it has been assigned nothing');
console.log('Bigint and Symbol are varaible types too but they are rarely used\n');

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
console.log('2. A variable is the name of a location in storage that holds a value\n');

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 +20;
console.log('3.',sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
let x = 12;
console.log('4.',x);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log('5',name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let y = 12-x;
console.log('6.',y);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
console.log('7. Are name1 and name2 equal?',name1===name2);
console.log('7. If name2 was "john" then the result of the above would be',name1==="john")
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
x = 3;
console.log('8.')
if(x===1){
    console.log('one');
} else if (x===2){
    console.log('two');
} else if (x===3){
    console.log('three');
} else if (x===4){
    console.log('four');
} else if (x===5){
    console.log('five');
} else if (x===6){
    console.log('six');
} else if (x===7){
    console.log('seven');
} else if (x===8){
    console.log('eight');
} else if (x===9){
    console.log('nine');
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let a = b ? 12:13;

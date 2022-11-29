// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true;
let myGender = isMale ? "male":"female";
console.log(myGender);
/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let numberOne;
let numberTwo;
let addition = numberOne + numberTwo;
let subtraction = numberOne-numberTwo;
let subtractionOtherWay= numberTwo-numberOne;
if (numberOne===8||numberTwo===8||addition||subtraction||subtractionOtherWay);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let stringOne = "Hey";
let stringTwo = "Hello";
let stringThree = stringOne + stringTwo;
console.log(stringThree);
/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = 5;
let num2 = 2;
let num3 = 6;
let greatestnumber;
let secondnumber;
let lowestnumber;
if(num2>num1) {
    if (num3>num2){
        greatestnumber = num3;
        secondnumber = num2;
        lowestnumber = num1;
    } else{
        greatestnumber = num2;
        if (num3>num1){
            secondnumber = num3;
            lowestnumber = num1;
        }
        else{
            secondnumber = num1;
            lowestnumber = num3;
        }
    }
} else if (num3>num1){
    greatestnumber = num3;
    secondnumber = num1;
    lowestnumber = num2;
} else if (num3>num2){
    greatestnumber = num1;
    secondnumber = num3;
    lowestnumber = num2;
} else{
    greatestnumber = num1;
    secondnumber = num2;
    lowestnumber = num3;
}
console.log("num1 =",num1,"num2 =",num2,"num3 =",num3)
console.log('Greatest number is',greatestnumber,', Second is ',secondnumber,'and the lowest is', lowestnumber);
/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let num4 = 10;
let num5 = 12;
let averageNum = (10+12)/2;
console.log('Average of',num4,'and',num5,'=',averageNum);
/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let stringSix = "hello hello hello";
let stringSeven = "hello hello hello hello";
if(stringSix.length>stringSeven.length){
    console.log("stringSix is longer than stringSeven!")
} else{
    console.log("stringSeven is longer than stringSix!")
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let i = 12;
let j = 14.5;

console.log(parseInt(j) === j);
console.log(parseInt(i)=== i);
/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage1 = 20;
let numberToGetPercentageOf = 400;
let finalValue = numberToGetPercentageOf * (percentage1/100)
console.log(finalValue);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let oddorevennumber = 13; 
let modulus = oddorevennumber%2;
if(modulus === 1){
    console.log(oddorevennumber,"is odd!");
} else{
    console.log(oddorevennumber,"is even!");
}

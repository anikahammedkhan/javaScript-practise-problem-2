// Question-1:
// You are given three numbers 13, 79, and 45. Write a     program that will print the largest number using if-else.
// 

var number1 = 13;
var number2 = 79;
var number3 = 45;

if (number1 > number2 && number1 > number3) {
    console.log("The Largest Number Is:");
    console.log(number1);
}
else if (number2 > number1 && number2 > number3) {
    console.log("The Largest Number Is:");
    console.log(number2);
}
else {
    console.log("The Largest Number Is:");
    console.log(number3);
}

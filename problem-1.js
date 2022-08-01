//* Question : You are given array: 
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of 'Banana' and replace 'banana' with 'Mango'
// b)Remove 'Orange' and add 'Watermelon'. 


// Given Array:

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

// Index of banana: 
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

// Replace Banana with Mango: 
fruits[1] = 'Mango';
console.log(fruits);

// remove orange:
fruits.pop();
console.log(fruits);

// add watermelon:
fruits.push('Watermelon');
console.log(fruits);
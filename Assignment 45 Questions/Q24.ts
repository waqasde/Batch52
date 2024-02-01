// Tests for equality and inequality with strings
console.log("Is 'Tesla' == 'Tesla'? I predict True.");
console.log('Tesla' == 'Tesla'); // True

console.log("Is 'Tesla' != 'Nissan'? I predict True.");
console.log('Tesla'.toString() != 'Nissan'.toString()); // True

// Tests using the lower case function
let brand = 'Mercedes';
console.log("Does brand.toLowerCase() == 'mercedes'? I predict True.");
console.log(brand.toLowerCase() == 'mercedes'); // True

console.log("Does brand.toLowerCase() == 'BMW'? I predict False.");
console.log(brand.toLowerCase() == 'BMW'.toLowerCase()); // False, corrected to make sense in context

// Numerical tests involving various comparisons
let age = 30;
console.log("Is age == 30? I predict True.");
console.log(age == 30); // True

console.log("Is age > 40? I predict False.");
console.log(age > 40); // False

console.log("Is age < 40 and age > 20? I predict True.");
console.log(age < 40 && age > 20); // True

console.log("Is age <= 30 or age > 40? I predict True.");
console.log(age <= 30 || age > 40); // True

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.indexOf('apple')>-1); // True

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.indexOf('grape')>-1); // False

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!(fruits.indexOf('mango')>-1)); // True

console.log("Is 'banana' not in fruits? I predict False.");
console.log(!(fruits.indexOf('banana')>-1)); // False

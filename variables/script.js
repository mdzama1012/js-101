// there are 3 ways to declare variables in javascript i.e, var, let and const.

// naming conventions: only letters, number, underscore and dollar sign are use, also we can't start a variable name with a number.

let firstName = 'Mohd';
let lastName = 'Zama';
console.log(firstName, lastName);

// ! Error if "let age = 18;"
// ? Hoisting in javascript if "var age = 18;"
// console.log(firstName, lastName, age);

// re-assigning values to the variables.
let age = 18;
console.log(age);
age = 20;
console.log(age);
const countryCode = '+91';
// ! Error: TypeError: Assignment to constant variable.
// countryCode = '+971';

// we can re-assign to the const object.
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// ! Error: nums = [1, 2, 3];
nums.push(6);
console.log(nums);
const person = {
  fullName: 'Mohd Zama',
  age: 20,
  email: 'zamazaidi777@gmail.com',
  mobileNum: '+91 8791365544',
};
console.table(person);
person.fullName = 'Mohd Zama Zaidi';
person.nationality = 'Indian';
console.table(person);

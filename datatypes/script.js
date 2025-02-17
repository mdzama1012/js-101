// there are two types of datatype in javascript i.e, primitive  type and reference type (objects).

// string - text data enclosed in quotes (single, double or backticks).
let str1 = 'Mohd Zama';
let str2 = `Mohd Zama`;
console.log(typeof str1, str1);
console.log(typeof str2, str2);

// numbers - int and float number.
let num1 = 550;
let num2 = 5.5;
console.log(typeof num1, num1);
console.log(typeof num2, num2);

// boolean - logical entity (true / false)
let isPossible = true; // or false
console.log(typeof isPossible, isPossible);

// undefined - a variable that has not yet been defined / assigned.
let x;
console.log(typeof x, x);

// null - intentional absanse of any object value.
let y = null;
console.log(typeof y, y);

// symbol - built-in object whose constructor returns a unique symbol.

// bigint - can handle number that are greater than "Number" type.
let bigNum = 9999999999999999999999999999999999999999n;
console.log(typeof bigNum, bigNum);

// any reference has a type is "object".
const nums = [1, 2, 3, 4, 5];
const person = {
  fullName: 'Mohd Zama',
  age: 20,
  email: 'zamazaidi777@gmail.com',
  phoneNumber: '+91 8791365544',
};
function greeting(fullName) {
  console.log(`Hello, ${fullName}!`);
}
greeting(str1);
console.log(typeof nums, nums);
console.log(typeof person, person);
console.log(typeof greeting);

// primitive types are stored directly in the "stack", where it is accessed from.

// reference types are stored in the "heap" and accessed by reference.

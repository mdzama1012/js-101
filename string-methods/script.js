let x;

const fullName = "Mohd Zama";
const age = 20;

// normal string concatination.
// x = 'My name is ' + fullName + ' and I am ' + age + ' year old.';

// template literals.
x = `My name is ${fullName} and I am ${age} year old.`;

// javascript object wrapper (object string).
// const s = new String('Test String');

const s = "Test String";

x = s[5];
x = s.charAt(5);

// return all the methods on string.
x = s.__proto__;

x = s.toLowerCase();

x = s.toUpperCase();
// case sensitive and only search for one character (return -1 if not found).
x = s.indexOf("s");
// similar to slice() method in python3.
x = s.slice(5, 6);

x = "            Hello, World!";

x = x.trim();

x = x.replace("World", "Hell");

x = x.includes("World");
// string object -> string primitive.
x = s.valueOf();

const date = "25/09/2024";
x = date.split("/");

console.log(typeof x, x);

// String Challenge:
x = "   zaMA   ";
x = x[0].toUpperCase() + x.substring(1).toLowerCase();
console.log(typeof x, x);

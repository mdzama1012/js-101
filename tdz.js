/**
 * NOTES:
 * var is hoisted and attached to the global object (window object).
 * let, and const are also hoisted but are not attached to the global object (window object), they are attached to something know as script.
 * they can only be accessed after they are initialized.
 * temporal dead zone is a concept that is used to prevent the variables from being accessed before they are initialized
 * TDZ is time from when the variable is declared, till it is initialized with some value.
 * reference error is thrown when the variable is accessed inside the TDZ or if it is not defined.
 * we can have variables with same name declared with var.
 * when syntax error occurs, not even a single line of code is executed.
 * type error is thrown when we don't follow the rule of the type of the variable. for example, we can't assign a string to a number, we can't reassign a const variable etc.
 * what type of variable declaration to use: try to use this order: const, let, and var (don't use var).
 */

// console.log(a); // throws a reference error: cannot access a before it is initialized.
// console.log(b); // throws a reference error: b is not defined.
console.log(c); // prints undefined.

let a = 1;

var c = 10;

// const x; // throws a syntax error: missing initializer in const declaration.

const x = 10;

// x = 20; // throws a type error: cannot assign to const x.

// this is treated as a reassignment by the interpreter.
var m = 10;
var m = 50;
console.log(m); // prints 50.

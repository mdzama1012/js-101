/**
 *
 * NOTES:
 *
 * block is also know as compound statement.
 * block combines multiple statements into a group.
 * we group multiple statements into one statement so that we can use multiple statements in place where javascript expects a single statement.
 * variable inside a block are also hoisted.
 * we have 4 types of scope: local, global, script, and block.
 * block also follow scope chain just like closure.
 *
 */

// let and const are block scoped because they are hoisted on the block.
{
	console.log(c);
	const a = 10;
	let b = 20;
	var c = 30;
	console.log(a, b, c);
}

// var is function scoped.
function x() {
	var test = "this is test variable";
	console.log(test);
}
x();
// console.log(test);

// example 1: shadowing with var.
var a = 10;
{
	var a = 20;
	console.log(a); // prints 20.
}
console.log(a); // prints 20.

// example 2: shadowing with let.
let t = 10;
{
	let t = 20;
	console.log(t); // prints 20.
}
console.log(t); // prints 10.

// example 3: shadowing works with function as well.
let p = 10;
function x() {
	let p = 20;
	console.log(p); // prints 20.
}
x();
console.log(p); // prints 10.

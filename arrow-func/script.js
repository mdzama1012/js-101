// normal arrow function with lot of code.
const add = (a, b) => {
	// more lines of code...
	return a + b;
};

// arrow function with implicit return.
const subtract = (a, b) => a - b;

// arrow function with one parameter and implicit return. 😁
const double = n => 2 * n;

// arrow function with one line of code and implicit return (undefined).
const sayMyName = fullName => console.log(`hello, ${fullName}`);

// arrow function that return a object. 💀
const makeObj = (userId, fullName, age) => ({ userId, fullName, age });

// arrow function in a callback.
let nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(5 * num));

// IIFE (immediately invoked function expressions).
(function () {
	console.log("i'm inside, iife function");
})();

// console.log(add(5, 7));
// console.log(sayMyName('mohd zama'));
// console.log(subtract(7, 5));
// console.log(double(7));
// console.table(makeOjb(15, 'mohd zama', 20));

// function challenges-1:
const getCelsius = temperature => ((temperature - 32) * 5) / 9;
console.log(`temperature is 82 \xB0F or ${Math.round(getCelsius(82))} \xB0C`);

// function challenges-2:
const getMinMax = (...nums) => ({
	min: Math.min(...nums),
	max: Math.max(...nums),
});
console.log(getMinMax(1, 2, 4, 5, 5));

// function challenges-3:
((length, width) => {
	console.log(
		`the area of a rectangle with length of ${length} and width of ${width} is ${
			length * width
		}`
	);
})(10, 5);

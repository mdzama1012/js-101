let x = null;

// object is a common data structure that holds key/value pair.
const person = {
	firstName: "mohd",
	lastName: "zama",
	age: 20,
	hobbies: ["building projects", "programming", "movies", "cooking", "reading"],
	1: "one",
};

// access specific properties.
x = person.firstName;
// access value with any literal.
x = person["firstName"];
x = person[1];

// we can add a new properties without specifying them inside the object definition.
person.address = {
	houseNumber: 110,
	street: "muradnagar main raod, sakko wali gali, hussaini chawk",
	city: "muradnagar",
	state: "up",
};

// we can update property of object even if it is defined as a "const".
person.firstName = "zama";
person.lastName = "zaidi";
// remove any property from object.
delete person.hobbies;

// function can also be the value of a property.
person.greet = () =>
	console.log(`Hello, happy coding ${this.firstName} ${this.lastName}!`);

// two ways to combine objects together in one object.
const obj1 = { x: 5, y: 7, z: 4 },
	obj2 = { a: 2, b: 3, c: 9 },
	obj3 = { ...obj1, ...obj2 },
	obj4 = Object.assign({}, obj1, obj2);

// handle array of object.
const tasks = [
	{ taskId: 1, taskText: "go to gym" },
	{ taskId: 2, taskText: "buy 1 dozens of banana" },
	{ taskId: 3, taskText: "cook chicken for lunch" },
	{ taskId: 4, taskText: "solve a problem on leetcode" },
	{ taskId: 5, taskText: "email jhon doe" },
];
console.group("Tasks:");
for (let i = 0; i < tasks.length; i++) {
	console.log(`Task ${tasks[i].taskId}: ${tasks[i].taskText}`);
}
console.groupEnd();

// return array of all keys, keys are always in string.
x = Object.keys(person);

// value are in actual datatype in which they are defined.
x = Object.values(person);

/**
 * return a boolean value if the property is present in the object.
 * string representing the name of the property.
 */
x = person.hasOwnProperty("firstName");
x = person.hasOwnProperty("middleName");

let x = null;

// object is a common data structure that holds key/value pair.
const person = {
	first_name: "Mohd",
	last_name: "Zaidi",
	age: 20,
	hobbies: ["programming", "movies", "cooking", "reading", "watching reels"],
};

// access specific properties.
x = person.first_name;
x = person["first_name"];

// can add a new property (without specifying it inside the object definition).
person.address = {
	house_number: 152,
	street: "sakko wali gali, hussaini chawk",
	city: "muradnagar",
	state: "up",
};

// we can update property of object even if it is const.
person.first_name = "Zama";
person.last_name = "Zaidi";

// remove a property
delete person.hobbies;

// a function can also be the value of a property.
person.greet = function greet() {
	console.log(`Hello, happy coding ${this.first_name} ${this.last_name}!`);
};

// two ways to combine objects together in one object.
const obj_1 = { x: 5, y: 7, z: 4 };
const obj_2 = { a: 2, b: 3, c: 13 };
const obj_3 = { ...obj_1, ...obj_2 };
// const obj_3 = Object.assign({}, obj_1, obj_2);

// handle array of object.
const tasks = [
	{ task_id: 1, task: "buy milk" },
	{ task_id: 2, task: "buy apples" },
	{ task_id: 3, task: "workout" },
	{ task_id: 4, task: "cook food" },
	{ task_id: 5, task: "email doe" },
];
console.group("Tasks:");
for (let i = 0; i < tasks.length; i++) {
	console.log(`Task ${tasks[i].task_id}: ${tasks[i].task}`);
}
console.groupEnd();

// return all the keys in array (keys type is string).
x = Object.keys(person);
x = Object.values(person);
// return a boolean value.
x = person.hasOwnProperty("first_name");
x = person.hasOwnProperty("middle_name");

console.log(typeof obj_3, obj_3);
console.log(typeof x, x);

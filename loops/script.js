// iterate array.
nums = [1, 2, 3, 4, 5];
for (const num of nums) {
	console.log(num);
}

// iterate strings.
const myName = "mohd zama";
for (const alphabet of myName) {
	console.log(alphabet);
}

// for in loop is used for iterating objects.
const person = {
	first_name: "Mohd",
	last_name: "Zaidi",
	age: 20,
	hobbies: ["programming", "movies", "cooking", "reading", "watching reels"],
};
for (const key in person) {
	console.log(typeof key, key);
	if (!Array.isArray(person[key])) console.log(person[key]);
	else for (const element of person[key]) console.log(element);
}

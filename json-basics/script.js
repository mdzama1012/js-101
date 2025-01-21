const tasks = [
	{
		task_id: 1,
		task: "buy milk",
	},
	{
		task_id: 2,
		task: "buy apples",
	},
	{
		task_id: 3,
		task: "cook food",
	},
	{
		task_id: 4,
		task: "workout",
	},
	{
		task_id: 5,
		task: "call home",
	},
];

// convert to JSON string (we usually send stringify json to server).
const s = JSON.stringify(tasks);

// convert back to object.
const obj = JSON.parse(s);

console.log(typeof obj, obj);
console.log(typeof s, s);

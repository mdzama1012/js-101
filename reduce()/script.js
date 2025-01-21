/**
 * ! NOTES:
 * * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 */

// * reduce challenges.
// ! Sum of an Array: Use reduce() to calculate the sum of all numbers in an array.
const nums = [1, 2, 3, 4, 5];
const result = nums.reduce((acc, cur) => acc + cur);

// ! Flatten a Nested Array: Given a 2D array, flatten it into a 1D array.
const matrix = [[1, 2], [3, 4], [5]];
const finalArray = matrix.reduce(
	(finalArray, currRow) => [...finalArray, ...currRow],
	[]
);

// ! Count Occurrences: Use reduce() to count the occurrences of elements in an array.
const fruits = ['apple', 'banana', 'apple', 'apple', 'mango'];
const freqMap = fruits.reduce((freqMap, fruit) => {
	freqMap.hasOwnProperty(fruit) ? (freqMap[fruit] += 1) : (freqMap[fruit] = 1);
	return freqMap;
}, {});

// ! Find Maximum Element: Use reduce() to find the maximum value in an array.
const maxNum = nums.reduce((maxNow, curr) => Math.max(maxNow, curr));

// ! Group Objects by Property: Use reduce() to group objects by a property.
const items = [
	{ type: 'fruit', name: 'apple' },
	{ type: 'vegetable', name: 'carrot' },
	{ type: 'fruit', name: 'banana' },
	{ type: 'vegetable', name: 'lady finger' },
	{ type: 'vegetable', name: 'potato' },
	{ type: 'fruit', name: 'pineapple' },
	{ type: 'dairy', name: 'milk' },
	{ type: 'dairy', name: 'cheese' },
];
const itemByType = items.reduce((itemByType, item) => {
	itemByType.hasOwnProperty(item.type)
		? itemByType[item.type].push(item.name)
		: (itemByType[item.type] = [item.name]);
	return itemByType;
}, {});

console.log(itemByType);

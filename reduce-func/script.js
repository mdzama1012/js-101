/**
 *
 * the first time that the callback is run there is no "return value of the previous
 * calculation". if passed, an initial value may be used in its place, otherwise the
 * array element at index 0 is used as the initial value and iteration starts from the
 * next element (index 1 instead of index 0).
 *
 */

// reduce challenge: use reduce() to calculate the sum of array.
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur) => acc + cur);

// reduce challenge: given a 2d array, flatten it into a 1d array.
const matrix = [[1, 2], [3, 4], [5]];
const flatArr = matrix.reduce(
    (allArr, curArr) => [...allArr, ...curArr],
    [], // optional.
);

// use reduce-func to count the occurrences of array elements.
const fruits = ['apple', 'banana', 'apple', 'apple', 'mango'];
const freqMap = fruits.reduce((freqMap, fruit) => {
    freqMap[fruit] = (freqMap[fruit] ?? 0) + 1;
    return freqMap;
}, {});

// use reduce-func to find the maximum value of array.
const mx = arr.reduce((curMax, curr) => Math.max(curMax, curr));

// use reduce-func to group objects by a property.
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
    const hasType = itemByType.hasOwnProperty(item.type);
    if (hasType) {
        itemByType[item.type].push(item.name);
    } else {
        itemByType[item.type] = [item.name];
    }
    return itemByType;
}, {});

console.log(itemByType);

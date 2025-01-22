/**
 *
 * forEach() method of Array instances executes a provided function once for element
 * and returns undefined.
 *
 */

const socials = [
	"twitter",
	"facebook",
	"whatsapp",
	"snapchat",
	"instagram",
	"linkedin",
];
const arr = [45, 100, 9, 11, 55, 67]; // sum = 287

function decorativePrint(str, i) {
	if (i === 0) {
		console.log("================================================");
	}
	console.log(str);
	console.log("================================================");
}

socials.forEach(decorativePrint);

let sum = 0;
socials.forEach(num => (sum += num));
console.log("sum = " + sum);

socials.forEach((curEle, i, curArr) =>
	/**
	 *
	 * curEle => current element of the array.
	 * i => index of the current element in the array.
	 * curArr => the array on which forEach() was called upon.
	 *
	 */
	console.log(`${i}th index of ${curArr.length} elements, ${curEle}`)
);

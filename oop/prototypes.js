/**
 *
 * what is prototype?
 * when an object is create javascript attaches hidden properties and function to the object that is been created and these comes under prototype object (__proto__).
 * all these properties and method are put on the __proto__ object.
 * arr.__proto__.__proto__ is know as prototype chain.
 *
 * what is prototypical inheritance?
 * The inherited object also inherits the prototype.
 *
 */

// very good example of prototypes.
/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    let sum = 0;
    for (const num of this.nums) {
        sum += num;
    }
    return sum;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    const len = this.nums.length;

    let str = '';
    for (let i = 0; i < len; i++) {
        if (i < len - 1) {
            str += this.nums[i] + ',';
        } else {
            str += this.nums[i];
        }
    }
    return '[' + str + ']';
};

const arr1 = new ArrayWrapper([3, 2, 5, 4, 0]);
const arr2 = new ArrayWrapper([5, 6, 7, 8, 9]);
console.log(arr1);
console.log(arr1 + arr2);
console.log(String(arr1));

/**
 *
 * When we perform operations like obj1 + obj2 or String(obj1), we are using an object where a primitive is expected instead, so the JS engine will try to perform a type conversion to fulfill the operation (aka try to convert the type from object to a primitive type)
 *
 * If the primitive that's expected is an integer, then JS engine looks for valueOf() (which is a method on Object.prototype)
 *
 * If the primitive that's expected is a string, then JS engine looks for toString() (which is a method on Object.prototype)
 *
 */

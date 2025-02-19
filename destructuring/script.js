/**
 *
 * basic of rest and spread operator.
 * rest and spread operator are same but they are used in different context.
 * rest parameter is used within function parameters to gather multiple arguments.
 * spread operator is used to expand an iterable into individual elements.
 * operators use the same syntax (...), but their purpose and usage differ.
 *
 */
const firstName = 'mohd';
const lastName = 'zama';
const age = 20;

const person = {
    // firstName: firstName === firstName, because the key and value are same.
    firstName: firstName,
    lastName,
    age,
};

/**
 *
 * Destructuring is a way to extract and assign values from objects and array to variables.
 *
 * key are matching is important in destructuring.
 *
 */
const vars = { x: 5, y: 7, z: 2 };
const { z, y, x } = vars;

// below, all are undefined.
// const { a, b, c } = vars;

// destructuring nested objects in to variables.
// destructure triple nested object.

const superNested = {
    a: 1,
    b: {
        c: 2,
    },
    c: {
        d: {
            e: 3,
        },
    },
};

// destructuring
const {
    a,
    b: { c },
    c: {
        d: { e },
    },
} = superNested;

// destructure an array.
const arr = [56, 81, 7, 92, 31, 1];
const [firstEle, secondEle, ...reamingArr] = arr;

console.log(firstEle, secondEle, reamingArr);

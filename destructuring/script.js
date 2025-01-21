const first_name = 'zama';
const last_name = 'zaidi';
const age = 20;

const person = {
  // ? first_name: first_name,  ---> redundant.
  first_name,
  last_name,
  age
};

// * destructuring simple objects in to variables.
const vars = { x: 5, y: 7, z: 2 };
// ? all are undefined.
// const { a, b, c } = vars;
const { z, y, x } = vars;

// * destructuring nested objects in to variables.
const vars_nested = {
  i: 5,
  j: 7,
  k: 2,
  more_vars: {
    a: 1,
    b: 13,
    c: 0
  }
};
const { k, i, j, more_vars: { b, c, a } } = vars_nested;

// * destructure an array.
const nums = [56, 81, 7, 92, 31, 1];
const [first, second, ...remNums] = nums;

// console.log(first, second, remNums);
// console.log(i, j, k, a, b, c);
// console.log(typeof person, person);

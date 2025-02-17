greet('mohd zama');

// function declaration - (provide hoisting).
function greet(fullName) {
  console.log(`hello, ${fullName}`);
}

// function expression - (used to avoid hoisting).
const greet_expression = function (fullName) {
  console.log(`hello, ${fullName}`);
};
console.log(greet_expression());

// when we declare global variable with var it add it to window object.
var temp = 5;
// console.log(window);

// var is not block level scoped.
if (true) {
  const a = 100;
  let b = 200;
  var c = 300;
}
// console.log(a);
// console.log(b);
// console.log(c);

// but var is functional level scoped.
function f() {
  console.log('inside f(): ');
  var x = 5;
}
f();
// console.log(x);

// scope of nested function and blocks (similar).
function g() {
  const x = 5;
  function z() {
    const y = 7;
    console.log(x + y);
  }
  z();
  // console.log(y); // this will throw an error.
  // console.log(x);
}
g();

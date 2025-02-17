// example 1:
// function x() {
// 	const i = 5;
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 3000);
// }
// x();

// example 2: wrong solution.
function y() {
  // only one (i) is created and attached to the global object.
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
y();

// example 3: correct solution.
function z() {
  // for each block new (i) is created.
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
z();

// example 4: correct solution.
function a() {
  var count = 1;
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(count);
      count++;
    }, i * 1000);
  }
}
a();

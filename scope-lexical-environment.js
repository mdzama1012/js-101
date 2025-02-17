function foo() {
	console.log(a);
}

const a = 10;
foo();

// scope is directly dependent on the lexical environment.

// lexical environment is a local memory along with the lexical environment of its parent (and this chain goes on until global executing context).

// lexical mean hierarchy in code (example is below).
function x() {
	// here function y lexically sites inside function x.
	function y() {
		console.log("hello");
	}
	y();
}

// whenever we use a variable its value is searched for all the lexical environments, and this concept is know as scope chain.

// we can see global execution context in our web browsers's dev tool source tab by using debugger.

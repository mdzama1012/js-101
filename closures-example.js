// example 1: most common confusion.
function x() {
    // i is garbage collected but how are we using it in setTimeout's callback?
    const i = 5;
    setTimeout(() => {
        console.log(i);
    }, 3000);
}
x();

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
    // for each block new (i) is created if we use let instead of var.
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

// example 5: closures and block scope (try to dry run below code).
function x() {
    const a = 7;
    {
        const b = 5;
    }
    function y() {
        console.log(a);
        // closure scope don't includes blocked scoped variables.
        // b is block scoped so, using b will throw an error.
        // console.log(b);
    }
    return y;
}
const y = x();
y();

// example 6: the beauty of closures.
function x() {
    const name = 'mohammad zama';
    return function () {
        console.log('hello', name);
    };
}
displayName(x());

function displayName(cb) {
    console.log('~~~~~~~~~~~~~~~~~~~');
    cb();
    console.log('~~~~~~~~~~~~~~~~~~~');
}

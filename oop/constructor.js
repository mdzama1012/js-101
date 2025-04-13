// Here we are not using class (javascript) to do OOP as it is a syntactical sugar.
// stand alone constructors.
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

// add prototypes to an object.
Rectangle.prototype.area = function () {
    return this.width * this.height;
};

const rect1 = new Rectangle('rectangle 1', 10, 20);
const rect2 = new Rectangle('rectangle 2', 30, 10);
console.log(rect1.area());
console.log(rect2.area());

// read properties of object.
console.log(rect1.name, rect1['width'], rect1['height']);

// adding new properties to object.
rect1.color = 'red';
rect1.perimeter = function () {
    // can't use "this".
    return rect1.width * rect1.height;
};

// delete a property.
delete rect1.perimeter;

// check property.
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

// unboxing and boxing in javascript.
const strLit = 'hello, world!';
const strObj = new String('hello, world!');
console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// boxing in javascript, wraps the string literal to string object.
console.log(strLit.toUpperCase());

// unboxing, turns an object to its permeative datatype.
console.log(strObj.valueOf(), typeof strObj.valueOf());

// function can also be declared using object notation.
const funcLit = function (num) {
    return num * num;
};
const funcObj = new Function('num', 'return num * num');
console.log(funcLit(5), funcObj(3));

// example - 3 (array ond object literals are objects only).
const objLit = {};
const objObj = new Object();
console.log(objLit, objObj);

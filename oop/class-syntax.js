/**
 *
 * classes are added to javascript in ES6 update.
 * classes in javascript is syntactical sugar, the concept of OOPs in javascript way all way there.
 *
 */

class Shape {
    constructor(name) {
        this.name = name;
    }
    logShape() {
        console.log('This object has a shape of ', this.name);
    }
}

class Rectangle extends Shape {
    // constructor method.
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    isSquare() {
        return this.width === this.height;
    }
    // static methods are those method that are mend for classes not the instance of class.
    static getClassName() {
        return 'Rectangle';
    }
}

const rect1 = new Rectangle('square 1', 20, 20);
rect1.logShape();

console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());

console.log(Rectangle.getClassName());

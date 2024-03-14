class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return "Area calculation not implemented for generic shape.";
    }
}


class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}


class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}


class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}


const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4, 6);
const triangle = new Triangle("Triangle", 3, 4);

console.log(`Area of ${circle.name}: ${circle.area()}`);
console.log(`Area of ${rectangle.name}: ${rectangle.area()}`);
console.log(`Area of ${triangle.name}: ${triangle.area()}`);
console.log(`Area of Shape: ${new Shape().area()}`); 

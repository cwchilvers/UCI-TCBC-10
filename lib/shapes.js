// Shape classes
class Circle {
    constructor(color) {
        this.x = '150';
        this.y = '100';
        this.r = '80';
        this.color = color;
    }
}

class Square {
    constructor(color) {
        this.x = '70';
        this.y = '20';
        this.width = '160';
        this.height = '160';
        this.color = color;
    }          
}

class Triangle {
    constructor(color) {
        this.points = '150, 18 244, 182 56, 182';
        this.color = color;
    }
}

// Create a shape object
function createShape(shape, color) {
    let logoShape;

    switch (shape) {
        case '● Circle':
            logoShape = new Circle(color);
            return `<circle cx='${logoShape.x}' cy='${logoShape.y}' r='${logoShape.r}' fill='${logoShape.color}'/>`

        case '■ Square':
            logoShape = new Square(color);
            return `<rect x='${logoShape.x}' y='${logoShape.y}' width='${logoShape.width}' height='${logoShape.height}' fill='${logoShape.color}'/>`

        case '▲ Triangle':
            logoShape = new Triangle(color);
            return `<polygon points='${logoShape.points}' fill='${logoShape.color}'/>`
    }
}

module.exports = createShape;




// Shape classes
class Circle {
    constructor(color) {
        this.shape = 'circle';
        this.cx = '150';
        this.cy = '100';
        this.r = '80';
        this.fill = color;
    }
}

class Square {
    constructor(color) {
        this.shape = 'rect';
        this.x = '150';
        this.y = '100';
        this.width = '160';
        this.height = '160';
        this.fill = color;
    }          
}

class Triangle {
    constructor(color) {
        this.shape = 'polygon';
        this.points = '50 15, 100 100, 0 100';
        this.fill = color;
    }
}

// Create a shape object
function createShape(shape, color) {
    let logoShape;

    switch (shape) {
        case '● Circle':
            logoShape = new Circle(color);
            break;

        case '■ Square':
            logoShape = new Circle(color);
            break;

        case '▲ Triangle':
            logoShape = new Circle(color);
            break;
    }

    return logoShape;
}

module.exports = createShape;




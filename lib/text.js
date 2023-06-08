// Shape classes
class Text {
    constructor(color) {
        this.x = '150';
        this.y = '125';
        this.fontSize = '60';
        this.textAnchor = '80';
        this.fill = color;
    }
}

// Create a shape object
function createText(color) {
    let logoText = new Text(color);
    return logoText;
}

module.exports = createText;

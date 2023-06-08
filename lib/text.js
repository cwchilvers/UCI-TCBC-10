// Shape classes
class Text {
    constructor(text, color) {
        this.x = '150';
        this.y = '125';
        this.size = '60';
        this.anchor = '80';
        this.color = color;
        this.text = text;
    }
}

function createText(text, color) {
    // Correct user input for logo text
    text = text.substring(0, 3);    // Cut to 3 characters max
    text = text.toUpperCase()       // Make all letters uppercase

    // Create a text object
    const logoText = new Text(text, color);

    // Return text content for SVG file
    return `<text x='${logoText.x}' y='${logoText.y}' font-size='${logoText.size}' text-anchor='${logoText.anchor}' fill='${logoText.color}'>${logoText.text}</text>`
}

module.exports = createText;

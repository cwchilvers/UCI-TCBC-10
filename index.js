// Import modules
const inquire = require("./lib/inquirer.js")
const createShape = require("./lib/shapes.js");
const createText = require("./lib/text.js");
const createSVG = require("./lib/svg.js");
const writeFile = require("./lib/writeFile.js");

// Wrap everything in an asyncronous function so everything else executes after inquirer is finished
async function main() {
    // User input (wait for inquirer to finish before moving on)
    const data = await inquire();
    //Create logo
    createLogo(data);
}

function createLogo(data) {
    // Inform user that logo.svg is being created
    console.log('\x1b[44m%s\x1b[0m', '\nCreating logo.svg...\n');

    // Create elements for SVG file
    const logoShape = createShape(data.shape, data.shapeColor);
    const logoText = createText(data.text, data.textColor);
    const logoSVG = createSVG(logoShape, logoText)   

    // Write to SVG file
    writeFile(logoSVG);
}

// Run main
main();
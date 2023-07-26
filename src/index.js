// Import modules
const promptUser = require("./lib/promptUser")
const createShape = require("./lib/createShape");
const createText = require("./lib/createText");
const createSVG = require("./lib/createSVG");
const writeFile = require("./lib/writeFile.js");

const main = async () => {
    const data = await promptUser();    // User input
    createLogo(data);                   //Create logo
}

const createLogo = (data) => {
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
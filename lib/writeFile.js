// Import modules
const fs = require('fs');

function writeFile(logoSVG) {
    // Create SVG file
    fs.writeFile('./output/logo.svg', logoSVG, (err) =>
        // Inform user if there was an error or else inform user if SVG file was successfully created
        err ? console.error('\x1b[41m%s\x1b[0m', err) : console.log('\x1b[32m%s\x1b[0m', 'Success! Logo.svg file can be found inside the output folder.')
    );
}

module.exports = writeFile;
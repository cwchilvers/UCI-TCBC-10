const fs = require('fs');

// Write file
module.exports = (logoSVG) => {
    fs.writeFile('./output/logo.svg', logoSVG, (err) =>
        err ? console.error('\x1b[41m%s\x1b[0m', err) : console.log('\x1b[32m%s\x1b[0m', 'Success! Logo.svg file can be found inside the output folder.')
    );
}
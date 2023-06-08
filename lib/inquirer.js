// Import modules
const inquirer = require('inquirer');

// Get user input
function inquire() {
    const data = inquirer.prompt([
        {
            type: 'input',
            message: 'Logo Text (3 Characters Max):',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Logo Text Color:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Logo Shape:',
            name: 'shape',
            choices: [
                '● Circle',
                '■ Square',
                '▲ Triangle',
            ],
        },
        {
            type: 'input',
            message: 'Logo Shape Color:',
            name: 'shapeColor',
        }
    ])

    return data;
}

module.exports = inquire;
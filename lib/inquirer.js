// Import modules
const inquirer = require('inquirer');

// Colors for user to select from
const colors = ['black', 'blue', 'brown', 'green', 'grey', 'orange', 'purple', 'red', 'white', 'yellow',];

// Get user input
function inquire() {
    const data = inquirer.prompt([
        {
            type: 'input',
            message: 'Logo Text (3 Characters Max):',
            name: 'text',
        },
        {
            type: 'list',
            message: 'Logo Text Color:',
            name: 'textColor',
            choices: colors
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
            type: 'list',
            message: 'Logo Shape Color:',
            name: 'shapeColor',
            choices: colors
        }
    ])

    return data;
}

module.exports = inquire;
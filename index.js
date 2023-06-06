// Packages for application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        {
            type: 'input',
            message: 'Text (3 Characters Max):',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Text Color:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Shape:',
            name: 'shape',
            choices: [
                '● Circle',
                '■ Square',
                '▲ Triangle',
            ],
        },
        {
            type: 'input',
            message: 'Shape Color:',
            name: 'shapeColor',
        }
    ])


    
    
    .then((data) => {
        console.log(data);
    });
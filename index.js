const inquirer = require("inquirer")
const fs = require("fs")
const shapes = ["Triangle", "Circle", "Square"]
const { Circle } = require('./lib/shapes')

const questions = [

    {
        type: 'input',
        name: 'letters',
        message: 'Please enter 3 letters for logo...'
    },
    {
        type: 'list',
        name: 'choice',
        message: " Please choose a shape from the list",
        choices: shapes
    },
    {
        type: 'input',
        name: 'colorshape',
        message: 'Enter color or hex code to add color to logo shape...'
    },
    {
        type: 'input',
        name: 'colortext',
        message: 'Enter color or hex code to add color to logo text...'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result) => {
        if (err) throw err;
        console.log('Logo has been made')
    })
}

function start() {
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;

            if (answers.choice === 'Circle'){
                shape = new Circle(answers.letters, answers.colortext, answers.colorshape)
            }



            writeToFile('logo.svg',shape.render());
        })
}

start();
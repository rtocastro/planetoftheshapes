const inquire = require("inquirer")
const  jest = require("jest")
const fs = require("fs")

const questions = [

    {
        type:'input',
        name:'letters',
        message: 'Please enter 3 letters for logo...'
    },
    {
        type:'list',
        name:'shapes',
        message: 'Please choose a triangle, circle or square for logo...'
    },
    {
        type:'input',
        name:'color',
        message: 'Enter color or hex code to add color to logo...'
    },
];
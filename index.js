const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const render = require("./lib/shapes.js")

inquirer.registerPrompt('maxlenght-input', MaxLengthInputPrompt)
        
function renderSVG(input){
    let svg = render.generate(input)
    console.log(svg);

    fs.writeFile("logo.svg", svg,(err =>
        err ? console.error(err) : console.log("Generated logo.svg")
    ))
}

function init(){
    inquirer
    .prompt([
        {
            type: 'maxlenght-input',
            name: 'text',
            message: colors.brightMagenta('What is the text?'),
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textcolor',
            message: colors.brightMagenta('What is the color of the text?'),
        },
        {
            type: 'list',
            name: 'shape',
            message: colors.brightMagenta('What is the shape?'),
            choices: [
                "Circle",
                "Triangle",
                "Square"
            ]
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: colors.brightMagenta('What is the color of the shape?'),
        }
    ])
    .then((input) => {
        
        console.log(input);
        renderSVG(input)
    })
   
}

init()
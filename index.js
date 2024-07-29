const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
//Input limit include
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
//include shapes.js
const render = require("./lib/shapes.js")

//register input limit
inquirer.registerPrompt('maxlenght-input', MaxLengthInputPrompt)
        
//Render SVG file given input
function renderSVG(input){
    //Calls generate from shapes.js
    let svg = render.generate(input)
    console.log(svg);

    //write to logo.svg
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
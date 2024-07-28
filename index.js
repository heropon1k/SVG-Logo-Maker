const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlenght-input', MaxLengthInputPrompt)


class Input{
    constructor(text, textcolor, shape, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
    writeToFile(){
        fs.writeFile("logo.svg", data, (err =>
            err ? console.error(err) : console.log("Generated logo.svg") 
        ))
    }
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
                "circle",
                "triangle",
                "square"
            ]
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: colors.brightMagenta('What is the color of the shape?'),
        }
    ])
    .then((input) => {
        const userinput = new Input(input.text,input.textcolor,input.shape,input.shapecolor);
        console.log(userinput)
    })
   
}

init()
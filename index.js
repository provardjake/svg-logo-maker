const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

// questions that will be prompted to the user
const questions=[
    {
        name: "text", 
        type: "input", 
        message: "Enter 1-3 letters for your logo text: "

    }, 
    {
        name: "textColor",
        type: "input", 
        message: "Enter the color for your text (color keyword or hexadecimal): "
    }, 
    {
        name: "shape", 
        type: "list", 
        message: "Select a shape for your logo: ", 
        choices: ["circle", "triangle", "square"]
    },
    {
        name: "shapeColor", 
        type: "input", 
        message: "Enter the color for your shape (color keyword or hexadecimal): "
    }
];

// prompts the user for what their logo should contain. then takes the answers and calls the writetofile function.
function init(){
    inquirer.prompt(questions)
    .then((data)=>{
        if(data.text.length > 3 || data.text.length < 1 ){
            console.log("Please only enter 1-3 characters for your logo text");
            return init();
        }
        else{
            writeToFile(data);
        }
    })
}

// write the formatted svg code to an svg file
function writeToFile(data){
    const svg = generateSVG(data);

    fs.writeFile("logo.svg",svg, (err)=>{
        err ? console.log(err) : console.log("Generated logo.svg");
    } )
}

// formats the svg code depending on the user selection
function generateSVG(data){
    let shape;
    if (data.shape === "circle"){
        shape = new Circle(data.text.toUpperCase(), data.textColor, data.shapeColor);
    }
    if(data.shape === "triangle"){
        shape = new Triangle(data.text.toUpperCase(), data.textColor, data.shapeColor);
    }
    if(data.shape === "square"){
        shape = new Square(data.text.toUpperCase(), data.textColor, data.shapeColor);
    }

    return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}

        ${shape.renderText()}

    </svg>
    `;
}

init();
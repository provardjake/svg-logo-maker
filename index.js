const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

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

function writeToFile(data){
    const svg = generateSVG(data);

    fs.writeFile("logo.svg",svg, (err)=>{
        err ? console.log(err) : console.log("Your logo has been generated!");
    } )
}

function generateSVG(data){
    let shape;
    if (data.shape === "circle"){
        shape = new Circle();
    }
    if(data.shape === "triangle"){
        shape = new Triangle();
    }
    if(data.shape === "square"){
        shape = new Square();
    }

    return`<svg version="1.1" width="300" height="200">

        ${shape.render()}

        ${shape.renderText()}

    </svg>
    `;
}

init();
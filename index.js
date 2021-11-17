// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "How can you describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?"
    },
    {
        type: "checkbox",
        name: "licence",
        message: "What is the licence of this project?",
        choices: ["MIT", "Mozilla", "ISC", "Boost 1.0"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter yout github username"
    },
    {   type: "input",
        name: "email",
        message: "Enter your email address for contact"
    },
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success')
        
        
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) 
        .then((inquirerAnswers) => {
        console.log(inquirerAnswers);
        writeToFile("README.md", generateMarkdown(inquirerAnswers));
    })
}
// Function call to initialize app
init();

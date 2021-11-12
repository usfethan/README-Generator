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
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of project?"
    },
    {
        type: "input",
        name: "description",
        message: "How can you describe your project?"
    },
    {
        type: "input",
        name: "licence",
        message: "What is your licence?"
        
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How the people can contribute to this project?"
    },
    {   type: "input",
        name: "test",
        message: "How to test this project?"
    },
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) console.log(err);
        console.log("Success...");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) 
        .then((inquirerAnswers) => {
        console.log("Creating...");
        writeToFile("README.md", generateMarkdown(userInput));
    })
}
// Function call to initialize app
init();

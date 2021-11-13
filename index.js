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
        message: "What is the licence of this project?",
        choices: ["MIT", "Mozilla", "ISC", "Boost 1.0"],
        name: "licence,"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Where does the usage of this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {   type: "input",
        name: "test",
        message: "Is there any test command?"
    },
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var readme = generateMarkdown(data);
    fs.writeFile(fileName, readme, function(err) {
        console.log(err);
        console.log("Success...");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) 
        .then((inquirerAnswers) => {
        console.log("Creating...");
        writeToFile("README.md", inquirerAnswers);
    })
}
// Function call to initialize app
init();

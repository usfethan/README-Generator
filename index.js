// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of project."
    },
    {
        type: "input",
        name: "contents",
        message: "What is the table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Where do you use?"
    },
    {
        type: "input",
        name: "licence",
        message: "What is your licence?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How the people can contribute to this project?"
    },
    {   type: "input",
        name: "test",
        message: "How do you test this project?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) console.log(err);
        console.log("success");
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

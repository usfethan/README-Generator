// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt(
 [
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
        type: "list",
        name: "licence",
        message: "What is the licence of this project?",
        choices: ["MIT", "GNU"],
        default: ["MIT"]
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter yout github username!"
    },
    {   type: "input",
        name: "email",
        message: "Enter your email address for contact",
        validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter correct email address!");
                    return false;
                }
            }
    },
        
]);
};

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

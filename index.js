// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const colors = require('colors');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Please provide a description of your project.", "What are the installation instructions for your project?", "What is the usage information for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What license would you like to use for your project?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(colors.green("File created successfully!"));
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "test"
        },
        {
            type: "list",
            message: questions[6],
            name: "license",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            message: questions[7],
            name: "github"
        },
        {
            type: "input",
            message: questions[8],
            name: "email"
        }
    ]).then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();

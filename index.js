const fs = require("fs");
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is your title?", name: "title" },
  {
    type: "input",
    message: "Please enter your description.",
    name: "description",
  },
  {
    type: "list",
    message: "What license are you using for this project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./README1.md", data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File Written");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
      let generatedMarkdown = generateMarkdown(data);
    writeToFile(generatedMarkdown);
  });
}

// Function call to initialize app
init();

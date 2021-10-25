// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input
const questions = [
  { type: "input", message: "What is your title?", name: "title" },
  {
    type: "input",
    message: "Please enter your description.",
    name: "description",
  },
  {
    type: "input",
    message: "Please include installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please include usage instructions.",
    name: "usage",
  },
  {
    type: "list",
    message: "What license are you using for this project?",
    name: "licenseSelection",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message:
      "Please let other developers know how they can contribute to this project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please include testing information here.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// Function to write README file
function writeToFile(data) {
  fs.writeFile("./utils/README.md", data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File Written");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    let generatedMarkdown = generateMarkdown(data);
    writeToFile(generatedMarkdown);
  });
}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is your project tile?"
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of your project?"
      },
      {
        type: "input",
        name: "installation",
        message: "provide installation instructions?"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide usage information?"
      },
      {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines"
      },
      {
        type: "input",
        name: "test",
        message: "Provide test instructions."
      }
    ]);
  }
  

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

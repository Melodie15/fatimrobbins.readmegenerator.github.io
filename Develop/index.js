const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "badge",
            message: "What is your badge code?"
        },
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
            message: "Provide installation instructions?"
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
            message: "Provide test instructions"
        }
      {
            type: "checkbox",
            name: "License",
            message: "Choose your License",
            choices: [
                'Apache', 'MIT', 'GPL', 'BSD'
            ]
        }
    ]);
}
console.clear();


inquirer
    .prompt(questions).then(response => {
        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("# " + response.badge) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##  Description " + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##  Table of Contents " + '\n' + '-  ' + response.toc.split(",  ").join('\n' + '-  ')) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##  Installation Instructions " + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
            });
          
        fs.appendFileSync("README.md", ("##  Usage " + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
                });
             

         fs.appendFileSync("README.md", ("##  License " + '\n' + response.description) + '\n', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("It works");
                });

        fs.appendFileSync("README.md", ("##  How to Contribute " + '\n' + response.description) + '\n', function (err) {
              if (err) {
                return console.log(err);
                 }
         console.log("It works");
    });
    fs.appendFileSync("README.md", ("##  Authors " + '\n' + response.description) + '\n', function (err) {
        if (err) {
          return console.log(err);
           }
   console.log("It works");
});
fs.appendFileSync("README.md", ("##  How to Run Tests" + '\n' + response.description) + '\n', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
fs.appendFileSync("README.md", ("##  Contact Info" + '\n' + "![alt text](" + response.description) + '\n', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
fs.appendFileSync("README.md", ('\n' + response.questions2) + '\n', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
});
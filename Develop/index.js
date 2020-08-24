const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
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
            name: "content",
            message: "List your table of contents"
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
            type: "checkbox",
            name: "license",
            message: "Choose your License",
            choices: [
                'Apache', 'MIT', 'GPL', 'BSD'
            ]
      },
        {
            type: "input",
            name: "contribution",
            message: "Provide contribution guidelines"
        },
        {
            type: "input",
            name: "author",
            message: "Please list the author/authors"
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instructions"
        },
        {
            type: "input",
            name: "question1",
            message: "Enter your email address"
        },
        {
            type: "input",
            name: "question2",
            message: "What is your Github username"
        },
      
]
console.clear();


inquirer
    .prompt(questions).then( response => {
        fs.appendFileSync("README.md", ("##Title " +  '\n' + response.title) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##Description " + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##Table of Contents " + '\n' + '-  ' + response.content.split(",  ").join('\n' + '-  ')) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
        });
        fs.appendFileSync("README.md", ("##Installation Instructions " + '\n' + response.installation) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
            });
          
        fs.appendFileSync("README.md", ("##Usage " + '\n' + response.usage) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("It works");
                });
             

         fs.appendFileSync("README.md", ("##License " + '\n' + response.license) + '\n', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("It works");
                });

        fs.appendFileSync("README.md", ("##How to Contribute " + '\n' + response.contribute) + '\n', function (err) {
              if (err) {
                return console.log(err);
                 }
         console.log("It works");
    });
    fs.appendFileSync("README.md", ("##Authors " + '\n' + response.author) + '\n', function (err) {
        if (err) {
          return console.log(err);
           }
   console.log("It works");
});
fs.appendFileSync("README.md", ("##How to Run Tests" + '\n' + response.test) + '\n', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
fs.appendFileSync("README.md", ("##Questions" + '\n' + response.question1) + '\n', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
fs.appendFileSync("README.md", ("##Questions" + '\n' + response.question2) + '\n' + 'https://melodie15.github.io/fatimrobbins.readmegenerator.github.io/', function (err) {
    if (err) {
      return console.log(err);
       }
console.log("It works");
});
})
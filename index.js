// TODO: Include packages needed for this application
const fs = require ('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

const api = require('./utils/api')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter github username',

        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("please enter a github username");
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'repository',
        message: 'enter the name of your repository',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("you must enter the name of your github repository");
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("you must enter the title of your project");
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'enter a description of your project',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("you must enter a description for your project");
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'explain how user should install (if needed)'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use for Usage section',
    },

    {
        type: 'list',
        name: 'license',
        message: 'choose a license for your repo',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'explain how users can contribute to your project (if needed)',
    },

    {
        type: 'input', 
        name: 'tests',
        message: 'provide tests for project, and explain how to test (if needed)',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README file has been created!')
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("your responses: ", userResponses);
        console.log("your responses have been logged. Calling github...");

        // referencing API.js
        const userInfo = await api.getUser(userResponses);
        console.log("your github user info: ", userInfo);

        //pass inquirer data and api data down to markdown
        console.log("generating markdown file")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        //write markdown
        await writeFileAsync('exampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();

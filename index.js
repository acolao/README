// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
console.log("Answer the following questions to generate a ReadMe");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a description of your project?',
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Enter a description');
        return false;
      }
    }
  },  
  {
    type: 'input',
    name: 'installation',
    message: 'What are your instructions for installation?',
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Enter instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the instructions for usage?',
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Enter Instructions');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Choose your license');
        return false;
      }
    }  
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What is your contribution?',
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Enter Contribution');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are your tests?',
    validate: your_input => {
      if (your_input) {
        return true;
      } else {
        console.log('Enter your tests');
        return false;
      }
    }
  },
  
];
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();
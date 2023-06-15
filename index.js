// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'description',
    message: 'What is a description of your repository?',
  },  
  {
    type: 'input',
    name: 'table of contents',
    message: 'What is your table of contents?',
  }, 
  {
    type: 'input',
    name: 'installation',
    message: 'What are your instructions for installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use this?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is your license?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What is your cosntribution?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are your tests?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What are your questions?',
  },
];
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

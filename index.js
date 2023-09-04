//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//linking to page where the Readme is developed
const generateReadme = require('./utils/generateMarkdown')


//an array of questions for user input
const questions = () =>{

    //using inquirer to propmt questions to user
    return inquirer.createPromptModule([
        {
            type:'input',
            name:'github',
            message:'What is your Github username?',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('please enter your Github user')
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

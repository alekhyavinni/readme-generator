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
            message:'Enter your Github username?',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('please enter your Github user')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'Enter your email address?',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('please enter correct email address')
                    return false;
                }
            }
    
        },
        {
            type:'input',
            name:'title',
            mesaage:'Enter your project name?',
            validate:nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter your projectname?')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            mesaage:'Write a short description about the project',
            validate:nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter the project description')
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

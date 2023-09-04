//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//linking to page where the Readme is developed
const generateReadme = require('./utils/generateMarkdown')


//an array of questions for user input
function questions(){

    //using inquirer to propmt questions to user
    return inquirer.prompt([
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
            message:'Enter your project name?',
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
            message:'Write a short description about the project',
            validate:nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter the project description')
                    return false;
                }
            }
        },
        {
            type:'list',
            name:'license',
            message:'What type of license do you want to apply to your project?',
            choices:['MIT','GNU'],
            default:['MIT'],
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter the project description')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'install',
            message:'Enter the steps required for the project',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter the project description')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'Enter the steps- how to use this app',
            validate:nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('Please enter the project description')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'test',
            message:'Enter the command to test the code',
            default:'npm test'
        },
        {
            type:'input',
            name:'contributors',
            message:'Enter the contributors of this project'
        }
    ])
}

// function to write README file
const writeToFile = data=>{
fs.writeFile('README-guide.md',data,err =>{
if(err){
    console.log(err);
    return;
}
else{
    console.log("Readme file successfully created")
}
})
}


//function to initialize app
function init() {
    questions()
    .then(answers=>{
        return generateReadme(answers);
    })
    .then(data =>{
     return writeToFile(data)
    })
    .catch(err =>{
        console.log(err)
    })
}

// Function call to initialize app
init();

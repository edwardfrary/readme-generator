//REQUIRED PACKAGES
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
const dataArr = [];

// TODO: Create an array of questions for user input
const questions = () => {
    console.log("=============================");

    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter your name. (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address. (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "gitName",
                message: "Enter your GitHub Username. (Required)",
                validate: gitNameInput => {
                    if (gitNameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub Username.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "title",
                message: "Enter Project Title. (Required)",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log("Please enter a project title.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "desc",
                message: "Enter Project Description. (Required)",
                default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, eius expedita sed amet minima eaque, quos, at consectetur fugit pariatur architecto odio totam fugiat quaerat. Temporibus ipsa ipsum error.",
                validate: descripInput => {
                    if (descripInput) {
                        return true;
                    } else {
                        console.log("Please enter a project description.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "inst",
                message: "Installation Instructions:",
                default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, eius expedita sed amet minima eaque, quos, at consectetur fugit pariatur architecto odio totam fugiat quaerat. Temporibus ipsa ipsum error.",
            },
            {
                type: "input",
                name: "usage",
                message: "Usage Information:",
                default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, eius expedita sed amet minima eaque, quos, at consectetur fugit pariatur architecto odio totam fugiat quaerat. Temporibus ipsa ipsum error.",
            },
            {
                type: "input",
                name: "distGuide",
                message: "Distribution Guidelines:",
                default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, eius expedita sed amet minima eaque, quos, at consectetur fugit pariatur architecto odio totam fugiat quaerat. Temporibus ipsa ipsum error.",
            },
            {
                type: "list",
                name: "license",
                choices: ['MIT License', "Apache License 2.0", "BSD 3-Clause 'New' or 'Revised' License", "GNU General Public License (GPL)"]
            },
            {
                type: "input",
                name: "testInst",
                message: "Test Instructions:",
                default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore, eius expedita sed amet minima eaque, quos, at consectetur fugit pariatur architecto odio totam fugiat quaerat. Temporibus ipsa ipsum error.",
            },
        ])
        .then(dataArr => {
            return generatePage(dataArr);
        })
        .then(dataArr => {
            fs.writeFile('./readme.md', dataArr, err => {
            });
        });
};

// Function call to initialize app
questions();


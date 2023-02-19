import inquirer from "inquirer";
import fs from "fs/promises";

const queries = await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "Give a brief description of the project.",
        },
        {
            type: "input",
            name: "installation",
            message: "What is the method of installation?",
        },
        
    ])


let readmeText = 
`# ${queries.title}
## ${queries.description}
## Table of Contents:
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
## Installation:
${queries.installation}
    `

fs.writeFile("generatedREADME.md", readmeText);
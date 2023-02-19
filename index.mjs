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
        {
            type: "input",
            name: "usage",
            message: "Are there any limits on usage?",
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license you used for this project.",
            choices: [
              "MIT",
              "Apache",
              "Boost",
            ],
        },
        {
            type: "input",
            name: "contributing",
            message: "Is it possible to contribute to this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "What testing has been done on this project?",
        },
        {
            type: "input",
            name: "questions",
            message: "Is it possible to contact you with questions about this project?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the URL for the Github repo?",
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
## Installation
${queries.installation}
## Usage
${queries.usage}
## License
${queries.license}
## Contributing
${queries.contributing}
## Tests
${queries.tests}
## Questions
${queries.questions}
## Github
${queries.githubURL}`

fs.writeFile("generatedREADME.md", readmeText);
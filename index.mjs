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
        
    ])


    let readmeText = 
    `# ${queries.title}
    `

fs.writeFile("generatedREADME.md", readmeText);
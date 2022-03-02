
const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([

    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaining your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "requiredsteps"
    },
    {
        type: "input",
        message: "What do i have to type in order to run this?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license did you get for this application?",
        name: "license",
        choices: ["Mit", "GNU AGPLv3", "Apache License 2.0", "Mozilla Public License 2.0","The Unlicense"]
    },
    {
        type: "input",
        message: "Who helped you contributing to this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Where do you test this application?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "question1"
    },
    {
        type: "input",
        message: "What is your Email address?",
        name: "question2"
    },
])



.then((answers) => {
    
    var readMe = generatereadMe(answers);
   
    fs.writeFile('testREADME.md', readMe, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully created your personal ReadMe :)");
    })
})
.catch(err => {
    console.log(err);
})


function generatereadMe(input) {
    return `# ${input.title}
    
## Description
${input.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
Required steps to install for your project are "${input.requiredsteps}"
## Usage
To run this app, go to the terminal and type "${input.usage}"
## License
${input.license}
## Contributing
Who helped you contribute to this application? ${input.contributing}
## Tests
In order to test this application you need to go to ${input.test}
## Questions
If you have any questions contact me at https://github.com/${input.question1}
and ${input.question2}
`
}
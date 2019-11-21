const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const newTeam = [];
let userObject = {};
let contentDiv = "";
let lastID = -1;

const createTeam = () => {
  console.log("team", newTeam);
  newTeam.forEach(teamMember => {
    let uniqueVariable = "";

    if (teamMember.office) {
      uniqueVariable = `<span>Office #:</span> ${teamMember.office}`;
    }
    if (teamMember.school) {
      uniqueVariable = `<span>School:</span> ${teamMember.school}`;
    }
    if (teamMember.github) {
      uniqueVariable = `<span>Github:</span> <a href="https://www.github.com/${teamMember.github}" target="_blank"> ${teamMember.github} </a>`;
    }

    contentDiv =
      contentDiv +
      `
      <div class="card ${teamMember.role} shadow-light">
        <div class="banner">
          ${teamMember.role}
        </div>
        <div class="p-15">
          <div>
            <span>Name:</span> ${teamMember.name}
          </div>
          <div>
          <span>ID:</span> ${teamMember.id}
          </div>
          <div>
          <span>Email:</span> <a href = "mailto:${teamMember.email}"> ${teamMember.email}</a>
          </div>
          <div>
           ${uniqueVariable}
          </div>
        </div>
      </div>
    `;
  });
  createHTML();
};

const createHTML = () => {
  console.log("html", contentDiv);
  let footerDiv = `
  </div>
  </body>
  </html>`;
  let headerSection = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Frow Project</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frow@3/dist/frow.min.css">
      <link rel="stylesheet" href="../styles.css"/>
      <title>ProfileGenerator</title>
    </head>
    <body>
    <div class="frow">`;

  let newHTML = headerSection + contentDiv + footerDiv;
  fs.writeFile("./output/index.html", newHTML, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

const init = () => {
  lastID = lastID + 1;
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(({ employee }) => {
      if (employee === "Manager") {
        newManager();
      }
      if (employee === "Engineer") {
        newEngineer();
      }
      if (employee === "Intern") {
        newIntern();
      }
    });
};

const newManager = manager => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number?"
      },
      {
        type: "confirm",
        name: "newmember",
        message: "Would you like to enter a new employee?",
        default: false
      }
    ])
    .then(answers => {
      userObject = new Manager(
        answers.name,
        "Manager",
        answers.email,
        lastID,
        answers.office
      );
      console.log();
      return answers;
    })
    .then(answers => {
      if (answers.newmember === true) {
        newTeam.push(userObject);
        init();
      } else {
        newTeam.push(userObject);
        createTeam(newTeam);
      }
    });
};
const newEngineer = engineer => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github username?"
      },
      {
        type: "confirm",
        name: "newmember",
        message: "Would you like to enter a new employee?",
        default: false
      }
    ])
    .then(answers => {
      userObject = new Engineer(
        answers.name,
        "Engineer",
        answers.email,
        lastID,
        answers.github
      );
      console.log();
      return answers;
    })
    .then(answers => {
      if (answers.newmember === true) {
        newTeam.push(userObject);
        init();
      } else {
        newTeam.push(userObject);
        createTeam(newTeam);
      }
    });
};

const newIntern = intern => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "school",
        message: "Where do/did you go to school?"
      },
      {
        type: "confirm",
        name: "newmember",
        message: "Would you like to enter a new employee?",
        default: false
      }
    ])
    .then(answers => {
      userObject = new Intern(
        answers.name,
        "Intern",
        answers.email,
        lastID,
        answers.school
      );
      console.log();
      return answers;
    })
    .then(answers => {
      if (answers.newmember === true) {
        newTeam.push(userObject);
        init();
      } else {
        newTeam.push(userObject);
        createTeam();
      }
    });
};

init();

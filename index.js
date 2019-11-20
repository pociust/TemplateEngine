const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const newTeam = [];
let userObject = {};
// let internObject = {};
let lastID = -1;

// const createTeam = () => {
//   console.log("success");
//   console.log(newTeam);
// };




const createHTML = () => {
  console.log("team", newTeam);
  newTeam.forEach(teamMember => {
    // let uniqueVariable = '';

    // teamMember.email ? teamMember.email = uniqueVariable : 



    const contentSection = `
    <div>
      Role:${teamMember.role}
    </div>
    <div>
      Name: ${teamMember.name}
    </div>
    <div>
      Email: ${teamMember.email}
    </div>
    <div>
      ${uniqueVariable}
    </div>
    ` 
    console.log(contentSection)
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
        console.log("manager");
        newManager();
      }
      if (employee === "Engineer") {
        console.log("engineer");

        newEngineer();
      }
      if (employee === "Intern") {
        console.log("intern");
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
        "manager",
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
        // createTeam();
        init();
      } else {
        newTeam.push(userObject);
        createHTML(newTeam);
      }
    });
};

const newIntern = intern => {
  console.log(intern);
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
        // createTeam();
        init();
      } else {
        newTeam.push(userObject);
        createHTML();
      }
    });
};
// module.exports = { init };
// {
//   type: "input",
//   name: "name",
//   message: "What is your name?"
// },
// {
//   type: "input",
//   name: "email",
//   message: "What is your email?"
// },

init();

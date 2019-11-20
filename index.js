const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const newTeam = [];
let userObject = {};
let lastID = -1;


function createTeam() {
  console.log('success')
  console.log(newTeam);
}

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
  console.log(manager);
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
      console.log()
      return answers;
    })
    .then(answers => {
      if (answers.newmember === true) {
        newTeam.push(userObject);
        createTeam();
        init();
      } else {
        createHTML();
      }
    });
};



// const newIntern = intern => {
//   console.log(manager);
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is your email?"
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "Where did you go to school?"
//       }
//     ])
//     .then(answers => {
//       const userObject = new Intern (answers.name, 'manager', answers.email, answers.office)
//         console.log('user', userObject)
//       console.log(answers);
//     });
// };

//     .then(async answer => {
//       let userObject = {};
//       if (answer.employee === "Manager") {
//         userObject = await manager.CreateManager(answer.name);
//       } else {
//         console.log("bad");
//         return;
//       }
//       console.log(userObject);
//     });
// }

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

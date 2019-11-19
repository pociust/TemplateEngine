const inquirer = require("inquirer");
const manager = require("./Manager");
// const Employee = require("./../Employee");
let userObject = {};

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "list",
      name: "employee",
      message: "What is your role?",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ])
  .then(async answer => {
    if (answer.employee === "Manager") {
      userObject = await manager.CreateManager(answer.name);
    } else {
      console.log("bad");
      return;
    }
    createHTML(userObject);
  });

function createHTML() {
  console.log("1234", userObject);
}

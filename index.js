const inquirer = require("inquirer");
const manager = require("./Manager")
// const Employee = require("./../Employee");



  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "list",
        name: "employee",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(answer => {
      console.log(manager);
      if (answer.employee === "Manager") {
        console.log("good");
        manager.CreateManager(answer.name);
      } else {
        console.log("bad");
      }
    });

    


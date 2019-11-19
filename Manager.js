const index = require("./index");
var inquirer = require("inquirer");
const employee = require("./Employee")
console.log("index", index);

class Manager extends employee{
  constructor(name, officeNum) {
    super(name, '2', 'Manager')
    this.office = officeNum

  }
}

function CreateManager(name) {
  console.log("helloworld");

  inquirer
    .prompt([
      {
        type: "input",
        name: "office",
        message: "What is your office number?"
      }
    ])
    .then(answer => {
      const userObject = new Manager(name, answer.office);
      console.log("user", userObject);
      //print to htmlmanamger()
    });
}

module.exports = { CreateManager };

const index = require("./index");
var inquirer = require("inquirer");
const employee = require("./Employee");
// const util = require("util");
// const fs = require("fs");
// const writeFileAsync = util.promisify(fs.writeFile);

class Manager extends employee {
  constructor(name, officeNum) {
    super(name, "2", "Manager");
    this.office = officeNum;
  }
}

function CreateManager(name) {
  return new Promise(resolve => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "office",
          message: "What is your office number?"
        }
      ])
      .then(async answer => {
        const userObject = new Manager(name, answer.office);
        resolve(userObject);
      });
  });
}

module.exports = { CreateManager };

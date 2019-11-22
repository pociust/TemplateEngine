const employee = require("./Employee");

class Intern extends employee {
  constructor(name, role, email, id, school) {
    super(name, id, email, role);
    this.school = school;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

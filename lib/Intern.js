const employee = require("./Employee");



class Intern extends employee {
  constructor(name, role, email, school) {
    super(name, "id:2", email, role);
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
  
  getRole() {
      return 'Intern';
  }
}


module.exports = Intern;

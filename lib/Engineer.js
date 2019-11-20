const employee = require("./Employee");



class Engineer extends employee {
  constructor(name, role, email, id, github) {
    super(name, id, email, role);
    this.github = github;
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
      return 'Engineer';
  }
}


module.exports = Engineer;

const employee = require("./Employee");


class Manager extends employee {
  constructor(name, role, email, id, officeNum) {
    super(name, id, email, role);
    this.officeNum = officeNum;
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
  getOfficeNum() {
    return this.officeNum;
  }
  
  getRole() {
      return 'Manager';
  }
}


module.exports = Manager;


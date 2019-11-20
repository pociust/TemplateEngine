const employee = require("./Employee");



class Engineer extends employee {
  constructor(name, role, email, officeNum) {
    super(name, "id:3", email, role);
    this.office = officeNum;
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

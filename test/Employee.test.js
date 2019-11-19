const Employee = require("./../Employee");



  describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object: with string name for new employeee, number for ID", () => {
        const employee = new Employee('tom', 2);
        expect(employee.name).toEqual('tom');
        expect(employee.id).toEqual(2)
      });
    });











  });

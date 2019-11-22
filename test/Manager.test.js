const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", "manager", "test@test.com", "id", testValue);
  expect(e.officeNum).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", testValue, "test@test.com", "office");
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", "manager", "test@test.com", "id", testValue);
  expect(e.getOfficeNum()).toBe(testValue);
});

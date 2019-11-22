const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", "Engineer", "test@test.com", 1, testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", testValue, "test@test.com", 1, "github");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", "Engineer", "test@test.com", 1, testValue);
  expect(e.getGithub()).toBe(testValue);
});

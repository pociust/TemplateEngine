;
// const Employee = require("./../Employee");
const start = require('.');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
const util = require("util");
const fs = require("fs");
// const writeFileAsync = util.promisify(fs.writeFile);




start.init();
// function init() {
//   inquirer
//     .prompt([
      // {
      //   type: "input",
      //   name: "name",
      //   message: "What is your name?"
      // },
      // {
      //   type: "input",
      //   name: "email",
      //   message: "What is your email?"
      // },
//       {
//         type: "list",
//         name: "employee",
//         message: "What is your role?",
//         choices: ["Manager", "Engineer", "Intern"]
//       }
//     ])
//     .then(async answer => {
//       let userObject = {};
//       if (answer.employee === "Manager") {
//         userObject = await manager.CreateManager(answer.name);
//       } else {
//         console.log("bad");
//         return;
//       }
//       console.log(userObject);
//     });
// };

function createHTML(userObject) {
  console.log('create', userObject)
}
//   JSDOM.fromFile("./template.html").then(dom => {
//     let usersDiv = dom.window.document.getElementById("users");
//     console.log(
//       "newuserdiv",
//       dom.window.document.getElementsByTagName("html")[0].innerHTML
//     );
//     const newDiv = `
//       <div class="col-md-1-5">
//       ${userObject.name}
//       </div>
//     `;
//     usersDiv = dom.window.document
//       .getElementById("users")
//       .appendChild(document.createElement(newDiv));
//     return writeFileAsync(
//       "./output/index.html",
//       usersDiv.getElementsByTagName("html")[0].innerHTML
//     );
//     // console.log(dom.serialize());
//   });

//   // console.log("1234", newDiv);
// }

///get the function to read template html and write to indexhtml

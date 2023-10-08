import inquirer from "inquirer";
const users = [
    {
        username: "ali12",
        pin: "1234",
        balance: 200000
    },
    {
        username: "ali13",
        pin: "4321",
        balance: 300000,
    },
    {
        username: "ali14",
        pin: "1111",
        balance: 400000,
    }
];
const loginData = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "Enter your username  :",
    },
    {
        name: "PIN",
        type: "password",
        message: "Enter tour secret PIN  : ",
        mask: "*",
        validate(input) {
            if (input.length === 4) {
                return true;
            }
            return false;
        },
    }
]);
const loggedInUser = users.find((user) => user.username === loginData.username && user.pin === loginData.PIN);
if (loggedInUser) {
    console.log(`welcome back ${loginData.username}!`);
}
// const answer = await inquirer.prompt({
//   name: "answer",
//   message: "Are you sure?",
//   type: "confirm",
// });
// console.log(typeof answer.answer);

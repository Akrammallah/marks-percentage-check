import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        message: "Enter your marks: ",
        type: "number",
        name: "marks"
    }]);
// console.log("your percentage is : ", + answer.marks/700*100)
if (answer.marks / 700 * 100 >= 80) {
    console.log(chalk.blueBright("your percentage is ") + (Math.floor(answer.marks / 700 * 100)) + "% " + chalk.bgGreen(" Grade : A1"));
}
else if (answer.marks / 700 * 100 >= 70) {
    console.log(chalk.greenBright("your percentage is ") + (Math.floor(answer.marks / 700 * 100)) + "% " + chalk.gray(" Grade : A"));
}
else if (answer.marks / 700 * 100 >= 60) {
    console.log(chalk.blueBright("your percentage is ") + (Math.floor(answer.marks / 700 * 100)) + "% " + chalk.greenBright(" Grade : B"));
}
else if (answer.marks / 700 * 100 >= 50) {
    console.log(chalk.blueBright("your percentage is ") + (Math.floor(answer.marks / 700 * 100)) + "% " + chalk.yellowBright(" Grade : C"));
}
else if (answer.marks / 700 * 100 >= 40) {
    console.log(chalk.blueBright("your percentage is ") + (Math.floor(answer.marks / 700 * 100)) + "% " + chalk.redBright(" Grade : D"));
}

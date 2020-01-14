const readline = require("readline-sync");
let firstNumber = readline.questionInt("First Number: ")
let secondNumber = readline.questionInt("Second Number: ")
let operator = readline.question("Operator: ")

function add(num1, num2) {
    return num1 + num2;
}
if(operator === "+") {
    console.log("The Result is: " + add(firstNumber, secondNumber));
}
function  mul(num1, num2) {
    return num1 * num2;
}
if(operator === "*")
    console.log("The Result is: " + mul(firstNumber, secondNumber));

function  div(num1, num2) {
    return num1 / num2;
}
if(operator === "/")
    console.log("The Result is: " + div(firstNumber, secondNumber));

function  sub(num1, num2) {
    return num1 - num2;
}
if(operator === "-")
    console.log("The Result is: " + sub(firstNumber, secondNumber));
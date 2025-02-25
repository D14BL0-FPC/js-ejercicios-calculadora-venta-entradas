let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstValue = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    firstValue = currentInput;
    operator = op;
    currentInput = "";
}

function calculateResult() {
    if (currentInput === "" || firstValue === "" || operator === "") return;
    let result;
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    display.value = result;
    currentInput = "";
    firstValue = "";
    operator = "";
}

function clearDisplay() {
    display.value = "";
    currentInput = "";
    operator = "";
    firstValue = "";
}

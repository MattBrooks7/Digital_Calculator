const resultInput = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstOperand = "";
let isTrue = true;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (!isNaN(value) || value === ".") {
      currentInput += value;
      updateDisplay();
    } else if ("+-*/".includes(value)) {
      handleOperator(value);
    } else if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearCalculator();
    }
  });
});
function updateDisplay() {
  resultInput.value = currentInput === "" ? "0" : currentInput;
}
function handleOperator(value) {
  if (currentInput !== "") {
    operator = value;
    firstOperand = currentInput;
    currentInput = "";
  }
}
function calculateResult() {
  if (currentInput !== "") {
    const secondOperand = currentInput;
    currentInput = calculate(firstOperand, operator, secondOperand);
    operator = "";
    firstOperand = "";
    updateDisplay();
  }
}
function clearCalculator() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  updateDisplay();
}
function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      if (num2 !== 0) {
        return (num1 / num2).toString();
      } else {
        return "Error";
      }
    default:
      return num2.toString();
  }
}
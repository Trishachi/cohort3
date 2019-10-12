let input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
let output = document.getElementById("output");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const clear = document.getElementById("clear");

const functions = {
  size: num => {
    if (num < 0) return "negative";
    if (num < 10) return "small";
    if (num < 20) return "medium";
    return "large";
  },

  add: (num1, num2) => {
    return num1 + num2;
  },

  subtract: (num1, num2) => {
    return num1 - num2;
  }
};

const calculator = {
  addition: (number1, number2) => {
    console.log("add button clicked");
    number1 = Number(input1.value);
    number2 = Number(input2.value);
    output.innerHTML = "Your Result is " + (number1 + number2);
    return number1 + number2;
  },
  subtraction: (number1, number2) => {
    console.log("subtract button clicked");
    number1 = Number(input1.value);
    number2 = Number(input2.value);
    output.innerHTML = "Your Result is " + (number1 - number2);
    return number1 - number2;
  },
  division: (number1, number2) => {
    console.log("divide button clicked");
    number1 = Number(input1.value);
    number2 = Number(input2.value);
    output.innerHTML =
      "Your Result is " + Math.round((number1 / number2) * 100) / 100;
    return number1 / number2;
  },
  multiplication: (number1, number2) => {
    console.log("multiply button clicked");
    number1 = Number(input1.value);
    number2 = Number(input2.value);
    output.innerHTML = "Your Result is " + number1 * number2;
    return number1 * number2;
  },
  clear: () => {
    input1.value = "";
    input2.value = "";
    output.innerText = "Result Goes Here";
  }
};

add.addEventListener("click", calculator.addition);
subtract.addEventListener("click", calculator.subtraction);
divide.addEventListener("click", calculator.division);
multiply.addEventListener("click", calculator.multiplication);
clear.addEventListener("click", calculator.clear);

export default functions;
export { calculator };

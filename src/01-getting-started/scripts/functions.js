let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");



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
  },
};

const calculator = {
  addition: (number1, number2) => { return number1 + number2 },
  subtraction: (number1, number2) => { return number1 - number2 },  
  division: (number1, number2) => { return number1 / number2  },
  multiplication: (number1, number2) => { return number1 * number2 }
}



input1.addEventListener("keypress", enterKeypress);
input2.addEventListener("keypress", enterKeypress);
button.addEventListener("click", onButtonClicked);

export default functions;
export {calculator};

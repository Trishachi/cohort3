// Calculator Parameters
let input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
let output = document.getElementById("output");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const divide = document.getElementById("divide");
// const multiply = document.getElementById("multiply");
// const clear = document.getElementById("clear");

// Tax Calculator Parameters
let totalTax = 0;
let afterTaxIncome = 0;

let arr = [];

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
    return number1 + number2;
  },
  addButtonClick: () => {
    console.log("add button clicked");
    let additionResult = calculator.addition(
      Number(input1.value),
      Number(input2.value)
    );
    output.textContent = "Your Result is " + additionResult;
  },
  subtraction: (number1, number2) => {
    return number1 - number2;
  },
  subButtonClick: () => {
    console.log("subtract button clicked");
    let subtractionResult = calculator.subtraction(
      Number(input1.value),
      Number(input2.value)
    );
    output.textContent = "Your Result is " + subtractionResult;
  },
  division: (number1, number2) => {
    return number1 / number2;
  },
  divButtonClick: () => {
    console.log("divide button clicked");
    let divisionResult = calculator.division(
      Number(input1.value),
      Number(input2.value)
    );
    output.textContent =
      "Your Result is " + Math.round(divisionResult * 100) / 100;
  },
  multiplication: (number1, number2) => {
    return number1 * number2;
  },
  multButtonClick: () => {
    console.log("multiply button clicked");
    let multiplicationResult = calculator.multiplication(
      Number(input1.value),
      Number(input2.value)
    );
    output.textContent = "Your Result is " + multiplicationResult;
  },
  clear: () => {
    input1.value = "";
    input2.value = "";
    output.innerText = "Result Goes Here";
  }
};

const calculate = {
  tax: annualIncome => {
    if (annualIncome <= 47630) totalTax = (annualIncome - 0) * (15 / 100) + 0;
    if (annualIncome > 47630 && annualIncome <= 95259)
      totalTax = (annualIncome - 47630) * (20.5 / 100) + 7145;
    if (annualIncome > 95259 && annualIncome <= 147667)
      totalTax = (annualIncome - 95259) * (26 / 100) + 16908;
    if (annualIncome > 147667 && annualIncome <= 210371)
      totalTax = (annualIncome - 147667) * (29 / 100) + 30535;
    if (annualIncome > 210371)
      totalTax = (annualIncome - 210371) * (33 / 100) + 48719;
    return totalTax;
  },
  taxButtonClick: () => {
    let calcTaxResult = calculate.tax(Number(income.value));
    afterTaxIncome = Number(income.value - calcTaxResult);
    taxResult.innerText = `Total Tax:  $${calcTaxResult}`;
    AFTIncome.innerText = `After-Tax Income: $${afterTaxIncome}`;
  },
  reset: () => {
    income.value = "";
    taxResult.innerText = `Total Tax:  $0`;
    AFTIncome.innerText = `After-Tax Income: $0`;
  }
};

const arrays = {
  addArray: item => {
    if (typeof item === "number" && isNaN(item) !== true) {
      return `${item} has been added to array`;
    }
    return "Input is not a valid number";
  },
  addArrayButton: () => {
    console.log("Add array button clicked");
    let addArrayResult = arrays.addArray(Number(getArray.value));
    if (addArrayResult == `${getArray.value} has been added to array`) {
      arr.push(Number(getArray.value));
    }
    console.log(arr);
    messageArea.textContent = addArrayResult;
    getArray.value = "";
  },
  showArray: arr => {
    return arr.join();
  },
  showArrayButton: () => {
    console.log("Show array button clicked");
    let showArrayResult = arrays.showArray(arr);
    messageArea.textContent = `Current array is ${showArrayResult}`;
  },
  totalArray: array => {
    return array.reduce((a, b) => a + b, 0);
  },
  totalArrayButton: () => {
    console.log("Total array button clicked");
    let totalArrayResult = Number(arrays.totalArray(arr));
    messageArea.textContent = totalArrayResult;
  },
  clearArray: array => {
    array = [];
    return array;
  },
  clearArrayButton: () => {
    arr = [];
    getArray.value = "";
    messageArea.textContent = "Array Cleared";
    console.log(arr);
  }
};

export default functions;
export { calculator, calculate, arrays };

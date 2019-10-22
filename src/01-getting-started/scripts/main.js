import functions from "./functions.js";
import { calculator } from "./functions.js";
import { calculate } from "./functions.js";
import { arrays } from "./functions.js";
import { province } from "./functions.js";

// Variable Declarations
let input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
let output = document.getElementById("output");

let afterTaxIncome = 0;
let arr = [];

// **********
//
// Add the event listeners
//

/**********************  Claculator Events *********************/

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

add.addEventListener("click", () => {
  console.log("add button clicked");
  let additionResult = calculator.addition(
    Number(input1.value),
    Number(input2.value)
  );
  output.textContent = "Your Result is " + additionResult;
});

subtract.addEventListener("click", () => {
  console.log("subtract button clicked");
  let subtractionResult = calculator.subtraction(
    Number(input1.value),
    Number(input2.value)
  );
  output.textContent = "Your Result is " + subtractionResult;
});

divide.addEventListener("click", () => {
  console.log("divide button clicked");
  let divisionResult = calculator.division(
    Number(input1.value),
    Number(input2.value)
  );
  output.textContent =
    "Your Result is " + Math.round(divisionResult * 100) / 100;
});

multiply.addEventListener("click", () => {
  console.log("multiply button clicked");
  let multiplicationResult = calculator.multiplication(
    Number(input1.value),
    Number(input2.value)
  );
  output.textContent = "Your Result is " + multiplicationResult;
});

clear.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  output.innerText = "Result Goes Here";
});

/**********************  Tax Claculator Events *********************/

calcTax.addEventListener("click", () => {
  let calcTaxResult = calculate.tax(Number(income.value));
  afterTaxIncome = Number(income.value - calcTaxResult);
  taxResult.innerText = `Total Tax:  $${calcTaxResult}`;
  AFTIncome.innerText = `After-Tax Income: $${afterTaxIncome}`;
});

reset.addEventListener("click", () => {
  income.value = "";
  taxResult.innerText = `Total Tax:  $0`;
  AFTIncome.innerText = `After-Tax Income: $0`;
});

/**********************  Array Events *********************/

addArr.addEventListener("click", () => {
  console.log("Add array button clicked");
  let addArrayResult = arrays.addArray(Number(getArray.value));
  if (addArrayResult == `${getArray.value} has been added to array`) {
    arr.push(Number(getArray.value));
  }
  console.log(arr);
  messageArea.textContent = addArrayResult;
  getArray.value = "";
});

showArr.addEventListener("click", () => {
  console.log("Show array button clicked");
  let showArrayResult = arrays.showArray(arr);
  messageArea.textContent = `Current array is ${showArrayResult}`;
});

totalArr.addEventListener("click", () => {
  console.log("Total array button clicked");
  let totalArrayResult = Number(arrays.totalArray(arr));
  messageArea.textContent = totalArrayResult;
});

clearArr.addEventListener("click", () => {
  arr = [];
  getArray.value = "";
  messageArea.textContent = "Array Cleared";
  console.log(arr);
});

/**********************  Province LookUp Events *********************/

provinceLookupBtn.addEventListener("click", () => {
  console.log("Lookup Button Clicked");
  let selectedProvince = province.find(provinceInputText.value);
  provinceMessage.textContent = `Province Fullname: ${selectedProvince}`;
  provinceInputText.value = "";
});

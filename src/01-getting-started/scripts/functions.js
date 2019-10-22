// // Calculator Parameters
// let input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");
// let output = document.getElementById("output");
// // const add = document.getElementById("add");
// // const subtract = document.getElementById("subtract");
// // const divide = document.getElementById("divide");
// // const multiply = document.getElementById("multiply");
// // const clear = document.getElementById("clear");

// Tax Calculator Parameters
let totalTax = 0;

const canadaProvinces = {
  ab: "Alberta",
  bc: "British Columbia",
  mb: "Manitoba",
  nb: "New Brunswick",
  nl: "Newfoundland and Labrador",
  ns: "Nova Scotia",
  nt: "Northwest Territories",
  nu: "Nunavut",
  on: "Ontario",
  pe: "Prince Edward Island",
  qc: "Quebec",
  sk: "Saskatchewan",
  yt: "Yukon"
};

let provinceResult = "";
let provinceCode = "";

const functions = {
  size: num => {
    if (num < 0) return "negative";
    if (num < 10) return "small";
    if (num < 20) return "medium";
    return "large";
  },

  add: (num1, num2) => {
    return num1 + num2;
  }
};

const calculator = {
  addition: (number1, number2) => {
    return number1 + number2;
  },
  subtraction: (number1, number2) => {
    return number1 - number2;
  },
  division: (number1, number2) => {
    return number1 / number2;
  },
  multiplication: (number1, number2) => {
    return number1 * number2;
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
  }
};

const arrays = {
  addArray: item => {
    if (typeof item === "number" && isNaN(item) !== true) {
      return `${item} has been added to array`;
    }
    return "Input is not a valid number";
  },
  showArray: arr => {
    return arr.join();
  },
  totalArray: array => {
    return array.reduce((a, b) => a + b, 0);
  },
  clearArray: array => {
    array = [];
    return array;
  }
};

const province = {
  find: provinceCodeTxt => {
    provinceCode = provinceCodeTxt.toLowerCase();
    switch (provinceCode) {
      case "ab":
        provinceResult = canadaProvinces.ab;
        return provinceResult;
      case "bc":
        provinceResult = canadaProvinces.bc;
        return provinceResult;
      case "mb":
        provinceResult = canadaProvinces.mb;
        return provinceResult;
      case "nb":
        provinceResult = canadaProvinces.nb;
        return provinceResult;
      case "nl":
        provinceResult = canadaProvinces.nl;
        return provinceResult;
      case "ns":
        provinceResult = canadaProvinces.ns;
        return provinceResult;
      case "nt":
        provinceResult = canadaProvinces.nt;
        return provinceResult;
      case "nu":
        provinceResult = canadaProvinces.nu;
        return provinceResult;
      case "on":
        provinceResult = canadaProvinces.on;
        return provinceResult;
      case "pe":
        provinceResult = canadaProvinces.pe;
        return provinceResult;
      case "qc":
        provinceResult = canadaProvinces.qc;
        return provinceResult;
      case "sk":
        provinceResult = canadaProvinces.sk;
        return provinceResult;
      case "yt":
        provinceResult = canadaProvinces.yt;
        return provinceResult;
      default:
        return "Invalid Province Code Selected";
    }
  }
};

export default functions;
export { calculator, calculate, arrays, province };

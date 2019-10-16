import functions from "./functions";
import { calculator } from "./functions";
import { calculate } from "./functions";
import { arrays } from "./functions";

test("Check the sizes", () => {
  expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(2000000)).toBe("large");
});

test("Does that add function work?", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});

test("Does the calculator work?", () => {
  expect(calculator.addition(1, 2)).toBe(3);
  expect(calculator.subtraction(3, 2)).toBe(1);
  expect(calculator.division(4, 2)).toBe(2);
  expect(calculator.multiplication(1, 2)).toBe(2);
});

test("Calculate Income Tax", () => {
  expect(calculate.tax(1)).toBe(0.15);
  expect(calculate.tax(2)).toBe(0.3);
  expect(calculate.tax(50000)).toBe(7630.85);
  expect(calculate.tax(100000)).toBe(18140.66);
  expect(calculate.tax(150000)).toBe(31211.57);
  expect(calculate.tax(250000)).toBe(61796.57);
});

test("Working with Arrays", () => {
  expect(arrays.addArray(2)).toBe("2 has been added to array");
  expect(arrays.addArray("name")).toBe("Input is not a valid number");
  expect(arrays.showArray([5, 10, 15])).toBe("5,10,15");
  expect(arrays.totalArray([5, 10, 15])).toBe(30);
  expect(arrays.clearArray()).toEqual([]);
});

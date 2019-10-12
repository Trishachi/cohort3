import functions from "./functions";
import { calculator } from "./functions";


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
  expect(calculator.multipi(1, 2)).toBe(3);
});

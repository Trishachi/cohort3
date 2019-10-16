import { assertEquals } from "./daily";
import { arrs } from "./daily";
import functions from "./daily";

/* Arrays Daily Test - 15/10/2019 and 16/10/2019 */

test("revsers the given array", () => {
  expect(arrs.reverseArray([1, 3, 6, 9, 5, 2, 8, 5])).toEqual([
    5,
    8,
    2,
    5,
    9,
    6,
    3,
    1
  ]);
});

test("Count down to take off", () => {
  expect(arrs.countDown(10)).toBe("10 9 8 7 6 5 4 3 2 1 0 ");
});

test("Counter/Timer", () => {
  expect(arrs.counter(10)).toBe("0 1 2 3 4 5 6 7 8 9 10 ");
});

test("Print profile details", () => {
  expect(arrs.profileDetails()).toEqual(
    "Chisom Okoye - 0543236543" +
      "\n" +
      "Harry Potter - 0994372684" +
      "\n" +
      "Sherlock Holmes - 0487345643" +
      "\n"
  );
});

test("Using for in with arrays", () => {
  expect(arrs.arraysList([100, 200, 300, 400, 500])).toBe(
    " 100,200,300,400,500,"
  );
});

test("Double numbers in array", () => {
  expect(arrs.doubleNumbers([2, 5, 8])).toEqual([4, 10, 16]);
});

test("Testing slicing of an array", () => {
  expect(
    arrs.sliceFruits(["Banana", "Orange", "Grape", "Peach", "Mandarine"], 2)
  ).toEqual(["Grape", "Peach", "Mandarine"]);
});

test("Testing splicing of an array", () => {
  expect(
    arrs.spliceFruits(["Banana", "Orange", "Grape", "Peach", "Mandarine"], 2, 2)
  ).toEqual(["Grape", "Peach"]);
});

// --------------------------------------------------------------------------------------

test("Check for equality", () => {
  expect(assertEquals("a", "b")).toBe(false); // Consider the edge cases
});

/*
    Write a function to format an email based on an array.
*/
test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

/*	
	Write the function to format an email based on an object / map
*/

test("email builder from an object / map", () => {
  const name = { fname: "first", lname: "last" };
  expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual(
    "bill.smith@evolveu.ca"
  );
});

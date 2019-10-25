import { assertEquals } from "./daily";
import { arrs, functions1 } from "./daily";
import functions from "./daily";

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

// Daily Test - 24/10/2019
test("email builder for company using forEach", () => {
  const staffEmail = functions1.loopStaffForEach(data.staff);
  expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
});

test("email builder for company using map()", () => {
  const staffEmail = functions1.loopStaffMap(data.staff);
  expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
});

// Daily Test - 22/10/2019
test("email builder for company using forOf", () => {
  const staffEmail = functions1.loopStaffOf(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
});

test("email builder for company using forIn", () => {
  const staffEmail = functions1.loopStaffIn(data.staff);
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
});

/*	
	// Daily Test - 21/10/2019 - Write the function to build email addresses for the company.
*/

test("email builder for company", () => {
  const staffEmail = functions1.loopStaff(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

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

test("Return Names longer than six characters", () => {
  expect(
    arrs.filterArrays([
      "Chisombili",
      "Henry",
      "Jonathan",
      "Bill",
      "Jamie",
      "Scholastica"
    ])
  ).toEqual(["Chisombili", "Jonathan", "Scholastica"]);
});

test("Double Arrays Using map()", () => {
  expect(arrs.doubleArrays([1, 4, 9, 16])).toEqual([2, 8, 18, 32]);
});

test("Sum Arrays Using reduce()", () => {
  expect(arrs.sumArrays([1, 2, 3, 4, 5])).toBe(15);
});

test("Test array sort method", () => {
  expect(
    arrs.cleanUp([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20])
  ).toEqual([1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]);
});

// --------------------------------------------------------------------------------------

test("Check for equality", () => {
  expect(assertEquals("a", "b")).toBe(false); // Consider the edge cases
  expect(assertEquals("a", "a")).toBe(true); // Consider the edge cases
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

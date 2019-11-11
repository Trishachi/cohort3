import { assertEquals } from "./daily";
import { arrs, functions1, callBacks } from "./daily";
import functions from "./daily";

const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

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

// Daily Test - 08/11/2019
test("Test CallBack Exercise - filterProvinces", () => {
  const filteredProvinces = callBacks.filterProvinces(people, data);

  expect(
    filteredProvinces[3].province == "BC" ||
      filteredProvinces[3].province == "AB"
  ).toBeTruthy();
  expect(callBacks.makeFullName(filteredProvinces)[3]).toBe("Carrie Ramirez");
  expect(callBacks.filterProvinces(people, callBacks.makeFullName)[3]).toBe(
    "Carrie Ramirez"
  );
});

// Daily Test - 06/11/2019
test("Test array of balances greater or equal 1000", () => {
  const filteredBalances = functions1.loopStaff1kBal(data.staff);
  expect(filteredBalances).toEqual([1000, 1330]);
});

// Daily Test - 29/10/2019
test("email builder for company to get total balance", () => {
  const totBalance = functions1.loopStaffTotBal(data.staff);
  expect(totBalance).toEqual(3823);
});

test("email builder for company to get average balance", () => {
  const totBalance = functions1.loopStaffAvgBal(data.staff);
  expect(totBalance).toEqual(546.14);
});

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

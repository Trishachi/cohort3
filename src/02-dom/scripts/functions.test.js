import functions from "./functions.js";

test("DOM Basics Connection Test", () => {
  const List = document.createElement("ol");
  functions.createListElement(List);
});

test("Add List Item Test", () => {
  const orderedList = document.createElement("ol");
  functions.createListElement(orderedList);
  expect(functions.createListElement(orderedList)).toBe("");
});

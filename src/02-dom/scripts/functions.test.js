import functions from "./functions.js";

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

jest.dontMock("fs");

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
  // restore the original func after test
  jest.resetModules();
});

test("DOM Basics Connection Test", () => {
  const List = document.createElement("ol");
  functions.createListElement(List);
});

test("Create and Add List Item Test", () => {
  let orderedList = document.getElementById("myList");
  let listCount = orderedList.children.length;
  functions.createListElement(orderedList);
  expect(orderedList.children.length).toEqual(listCount + 1);
});

test("Delete List Item Test", () => {
  let orderedList = document.getElementById("myList");
  let listCount = orderedList.children.length;
  functions.deleteItem(orderedList);
  expect(orderedList.children.length).toEqual(listCount - 1);
});

test("Show List Item Test", () => {
  let orderedList = document.getElementById("myList");
  functions.showList(orderedList);
  expect(functions.showList(orderedList)).toEqual(["Item 1", "Item 2"]);
});

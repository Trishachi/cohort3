import cardFunctions from "./cards.js";
import { exportAllDeclaration } from "@babel/types";

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../cards.html"), "utf8");

jest.dontMock("fs");

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
  // restore the original func after test
  jest.resetModules();
});

// test("DOM Cards Connection Test", () => {
//   const div = document.getElementById("leftPanel");
//   cardFunctions.addCard(div);
// });

test("Check if new card created", () => {
  let div = document.getElementById("leftPanel");
  let newCard = cardFunctions.createCard();
  let elementCount = div.childElementCount;
  div.appendChild(newCard);
  expect(div.childElementCount).toBe(elementCount + 1);
});

test("Check if new card is added", () => {
  let div = document.getElementById("leftPanel");
  let elementCount = div.childElementCount;
  cardFunctions.addCard(div);
  expect(div.childElementCount).toBe(elementCount + 1);
});

test("Check for card deletion", () => {
  let div = document.getElementById("leftPanel");
  cardFunctions.addCard(div);
  let elementCount = div.childElementCount;
  let selCard = div.children[1];
  cardFunctions.deleteCard(selCard);
  expect(div.childElementCount).toBe(elementCount - 1);
});

//Fix failing txt - Gettind Card 5 instead of Card 2 ==> Findings - The tests are cumulative
test("Check for card added before and after target", () => {
  let div = document.getElementById("leftPanel");
  let btn = document.getElementById("mainOperation");
  div.appendChild(btn);
  cardFunctions.addCard(div);
  let selCard = div.children[1];
  cardFunctions.addCardBefore(div, selCard);
  // expect(div.children[1].children[0].textContent).toBe("Card 2");
  expect(div.children[1].children[0].textContent).toBe("Card 5");
  cardFunctions.addCardAfter(div, selCard);
  expect(div.children[2].children[0].textContent).toBe("Card 4");
});

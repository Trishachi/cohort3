import functions1 from "./domPlay.js";

test("DoM Play Test", () => {
  const myDiv = document.createElement("div");
  functions1.addCard(myDiv, 3);
});

test("Check what cards on page", () => {
  const chkCard = document.createElement("div");
  functions1.addCard(chkCard, 0);
  functions1.addCard(chkCard, 1);
  functions1.addCard(chkCard, 2);
  expect(functions1.whatCard(chkCard)).toEqual([0, 1, 2]);
  functions1.addCard(chkCard, 3);
  expect(functions1.whatCard(chkCard)).toEqual([0, 1, 2, 3]);
});

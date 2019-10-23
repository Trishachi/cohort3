import functions from "./functions.js";

test("displays new list item after a click", () => {
  // Set up our document body
  //   document.body.innerHTML =
  //     "<div>" +
  //     '  <span id="username" />' +
  //     '  <button id="button" />' +
  //     "</div>";

  expect(functions.addListOnBtnClick).toEqual(newTodo);
});

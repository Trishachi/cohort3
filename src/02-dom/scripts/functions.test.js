import functions from "./functions.js";

test("displays new list item after a click", () => {
  expect(functions.addListOnBtnClick).toBeCalled();
});

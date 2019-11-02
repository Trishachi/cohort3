import * as oo from "./oostuff.js";

test("oop practise tests", () => {
  console.log("Hello from oostuff.test");
  oo.ooPractise();
});

test("oop class practise", () => {
  const l = new oo.Person("Larry", 5);
  expect(l.getName()).toEqual("Larry");
  const d = new oo.Person("Dean", 29);
  expect(d.getName()).toEqual("Dean");
  expect(l.getAge()).toEqual(5);
  l.birthday();
  expect(l.getAge()).toEqual(6);
});

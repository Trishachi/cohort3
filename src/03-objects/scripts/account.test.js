import { Account } from "./account.js";

test("Test for Account Initializations", () => {
  let newAcc = new Account("Checking", 20);
  newAcc.deposit(10);
  console.log(newAcc.balance());
  expect(newAcc.balance()).toBe(30);
});

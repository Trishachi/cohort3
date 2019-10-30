import { Account, AccountController } from "./account.js";

test("Test for Account Initializations", () => {
  let newAcc = new Account("Checking", 20);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  expect(newAcc.balance()).toBe(20);
  newAcc.deposit(10);
  expect(newAcc.balance()).toBe(30);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  newAcc.withdraw(20);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  expect(newAcc.balance()).toBe(10);
});

test("Testing Account Controller", () => {
  let newAccount = new AccountController();
  // console.log(newAccount.addAccount("New", 10));
  expect(newAccount.addAccount("New", 10)).toEqual([
    { AccBalance: 10, accountName: "New" }
  ]);
  expect(newAccount.removeAccount("name")).toEqual(0);
});

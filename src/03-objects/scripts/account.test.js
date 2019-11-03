import { Account, AccountController } from "./account.js";
import helperFunctions from "./helperFunctions.js";

test("Test for Account Initializations", () => {
  let newAcc = new Account("Checking", 20);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  expect(newAcc.balance()).toBe(20);
  newAcc.deposit(10);
  expect(newAcc.balance()).toBe(30);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  newAcc.deposit(-1);
  expect(newAcc.balance()).toBe(30);
  newAcc.deposit(50);
  console.log(`Current Account Balance: ${newAcc.balance()}`);
  expect(newAcc.balance()).toBe(80);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
});

test("Testing Account Controller", () => {
  let newAccount = new AccountController();
  // console.log(newAccount.addAccount("New", 10));
  expect(newAccount.addAccount("New", 10)).toEqual([
    { accountName: "New", AccBalance: 10 }
  ]);

  expect(newAccount.addAccount("New1", 20)).toEqual([
    { accountName: "New", AccBalance: 10 },
    { accountName: "New1", AccBalance: 20 }
  ]);
  // console.log(newAccount.accountHolder);
  expect(newAccount.removeAccount("New")).toEqual([
    { accountName: "New1", AccBalance: 20 }
  ]);
  console.log(newAccount.accountHolder);
  newAccount.addAccount("New2", 30);
  newAccount.addAccount("New3", 15);
  console.log(newAccount.accountHolder);
  expect(newAccount.getAccBalances(newAccount.accountHolder)).toEqual([
    20,
    30,
    15
  ]);
  console.log(newAccount.getAccBalances(newAccount.accountHolder));
  expect(newAccount.totalAccBalance(newAccount.accountHolder)).toEqual(65);
  console.log(newAccount.totalAccBalance(newAccount.accountHolder));
  expect(newAccount.highestValAcc(newAccount.accountHolder)).toEqual(30);
  expect(newAccount.lowestValAcc(newAccount.accountHolder)).toEqual(15);
  expect(newAccount.accountList.length).toEqual(3);
});
//**********************************Helper Functions Tests***************************************/
//Test Clear inputs
test("Testing Clear Input Fields", () => {
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  input1.value = "Checking";
  input2.value = "50";
  helperFunctions.clearInputs(input1, input2);
  expect(input1.value).toEqual("");
  expect(input2.value).toEqual("");
});

//Test create card functions
test("Check Card Funtions", () => {
  let div = document.createElement("div");
  let elementCount = div.childElementCount;
  let newCard1 = helperFunctions.addCard("Sav", 200, div);
  expect(div.childElementCount).toBe(elementCount + 1);
  let newCard2 = helperFunctions.addCard("Sav", 200, div);
  console.log(div.childElementCount);
  helperFunctions.deleteCard(newCard2);
  console.log(div.childElementCount);
  expect(div.childElementCount).toBe(1);
});

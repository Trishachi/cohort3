import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DefaultApp from "./components/DefaultApp/DefaultApp.js";
import Animation from "./components/Animations/svgComponent.js";
import Game from "./components/Tictactoe/tictactoe.js";
import {
  Account,
  AccountController
} from "./components/Accounts/accountFunctions.js";
import AccountComp from "./components/Accounts/Account.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Starter App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DefaultApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Navigation App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Animation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("TicTacToe App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Accounts App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Test for Account Initializations", () => {
  let newAcc = new Account("Checking", 20);
  expect(newAcc.balance()).toBe(20);
  newAcc.deposit(10);
  expect(newAcc.balance()).toBe(30);
  newAcc.deposit(-1);
  expect(newAcc.balance()).toBe(30);
  newAcc.deposit(50);
  expect(newAcc.balance()).toBe(80);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
});

test("Testing Account Controller", () => {
  let newAccount = new AccountController();
  newAccount.addAccount("New", 10);
  expect(newAccount.accountList()).toEqual([
    { accountName: "New", AccBalance: 10 }
  ]);

  newAccount.addAccount("New1", 20);
  expect(newAccount.accountList()).toEqual([
    { accountName: "New", AccBalance: 10 },
    { accountName: "New1", AccBalance: 20 }
  ]);

  newAccount.removeAccount("New");
  expect(newAccount.accountList()).toEqual([
    { accountName: "New1", AccBalance: 20 }
  ]);

  newAccount.addAccount("New2", 30);
  newAccount.addAccount("New3", 15);
  expect(newAccount.getAccBalances(newAccount.accountHolder)).toEqual([
    20,
    30,
    15
  ]);

  expect(newAccount.totalAccBalance(newAccount.accountHolder)).toEqual(65);
  expect(newAccount.highestValAcc(newAccount.accountHolder)).toEqual(30);
  expect(newAccount.lowestValAcc(newAccount.accountHolder)).toEqual(15);
  expect(newAccount.accountList().length).toEqual(3);
});

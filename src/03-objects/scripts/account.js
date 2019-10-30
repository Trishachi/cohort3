export class Account {
  constructor(accountName, AccBalance) {
    this.accountName = accountName;
    this.AccBalance = AccBalance;
  }

  deposit(depositAmount) {
    if (depositAmount <= 0) {
      return (this.AccBalance = "Please Enter Positive Dollar Amount");
    }
    this.AccBalance += depositAmount;
    //return this.AccBalance;
  }

  withdraw(withAmount) {
    if (withAmount > this.AccBalance) {
      return (this.AccBalance = "Insufficient Funds");
    }
    this.AccBalance -= withAmount;
    // return this.AccBalance;
  }

  balance() {
    return this.AccBalance;
  }
}

export class AccountController {
  constructor() {
    this.accountHolder = [];
  }
  addAccount(newAcc, initBalance) {
    // const newAcc1 = new Account(initBalance, newAcc);
    this.accountHolder.push(new Account(newAcc, initBalance));
    return this.accountHolder;
  }
  removeAccount(accName) {
    return 0;
  }
}

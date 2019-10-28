export class Account {
  constructor(accountName, AccBalance) {
    this.accountName = accountName;
    this.AccBalance = AccBalance;
  }

  deposit(depositAmount) {
    this.AccBalance += depositAmount;
    // return this.AccBalance;
  }

  withdraw(withAmount) {
    this.AccBalance -= withAmount;
    // return this.AccBalance;
  }

  balance() {
    return this.AccBalance;
  }
}

import { Account, AccountController } from "./account.js";

deposit.addEventListener("click", () => {
  console.log("Clicked");
  const newAccount = new Account(
    accountName.value,
    Number(initialBalance.value)
  );
  newAccount.deposit(Number(amount.value));
  message.textContent = `Effective Balance: $${newAccount.balance()}`;
});

withdraw.addEventListener("click", () => {
  console.log("Clicked");
  const newAccount = new Account(
    accountName.value,
    Number(initialBalance.value)
  );
  newAccount.withdraw(Number(amount.value));
  message.textContent = `Effective Balance: $${newAccount.balance()}`;
});

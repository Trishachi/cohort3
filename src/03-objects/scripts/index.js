import { Account, AccountController } from "./account.js";
import helperFunctions from "./helperFunctions.js";

// deposit.addEventListener("click", () => {
//   console.log("Clicked");
//   const newAccount = new Account(
//     accountName.value,
//     Number(initialBalance.value)
//   );
//   newAccount.deposit(Number(amount.value));
//   message.textContent = `Effective Balance: $${newAccount.balance()}`;
// });

// withdraw.addEventListener("click", () => {
//   console.log("Clicked");
//   const newAccount = new Account(
//     accountName.value,
//     Number(initialBalance.value)
//   );
//   newAccount.withdraw(Number(amount.value));
//   message.textContent = `Effective Balance: $${newAccount.balance()}`;
// });

newAccount.addEventListener("click", () => {
  helperFunctions.addCard(leftPanel);
  helperFunctions.clearInputs(accountName, initialBalance);
  accSumMessage.classList.add("unhide");
});

leftPanel.addEventListener("click", function(event) {
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    console.log("Delete Clicked");
    const selectedCard = event.target.parentElement.parentElement;
    //Implement logic for removing account from account array
    helperFunctions.deleteCard(selectedCard);
  }
  if (event.target.className == "deposit btn btn-outline-primary") {
    console.log("Deposit Clicked");
    // const selectedCard = event.target.parentElement.parentElement;
    // cardFunctions.addCardBefore(leftPanel, selectedCard);
  }
  if (event.target.className == "withdraw btn btn-outline-primary") {
    console.log("Withdraw Clicked");
    // const selectedCard = event.target.parentElement.parentElement;
    // cardFunctions.addCardAfter(leftPanel, selectedCard);
  }
});

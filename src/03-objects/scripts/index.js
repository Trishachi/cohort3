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
// let accountArrays = [];
const newAcc = new AccountController("User");

newAccount.addEventListener("click", () => {
  helperFunctions.addCard(leftPanel);
  newAcc.addAccount(accountName.value, Number(initialBalance.value));
  helperFunctions.clearInputs(accountName, initialBalance);
  accOptions.classList.add("unhide");
  console.log(newAcc.accountHolder);
});

totBalSummary.addEventListener("click", () => {
  console.log("Balance Button Clicked");
  let totalBalance = newAcc.totalAccBalance(newAcc.accountHolder);
  resultDisplay.textContent = `Total account balance is: $${totalBalance}`;
});

highValAcc.addEventListener("click", () => {
  console.log("Highest Value Button Clicked");
  let highestAcc = newAcc.highestValAcc(newAcc.accountHolder);
  resultDisplay.textContent = `Highest Value Account is: $${highestAcc}`;
});

lowValAcc.addEventListener("click", () => {
  console.log("Lowest Value Button Clicked");
  let lowestAcc = newAcc.lowestValAcc(newAcc.accountHolder);
  resultDisplay.textContent = `Lowest Value Account is: $${lowestAcc}`;
});

leftPanel.addEventListener("click", function(event) {
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    console.log("Delete Clicked");
    const selectedCard = event.target.parentElement.parentElement;
    console.log(selectedCard.child);
    newAcc.removeAccount(Account.accName);
    //Implement logic for removing account from account array
    helperFunctions.deleteCard(selectedCard);
    console.log(newAcc.accountHolder);
  }
  if (event.target.className == "deposit btn btn-outline-primary") {
    let selectedCard = event.target.parentElement.parentElement;
    let inputField = selectedCard.children[1].children[0].children[0];
    let depositAmount = Number(inputField.value);
    if (depositAmount > 0) {
      let currentCardName = selectedCard.children[0].textContent;
      let currentCardIndex = newAcc.accountHolder.findIndex(
        arrayItem => arrayItem.accountName === currentCardName
      );
      // console.log(currentCardIndex);
      newAcc.accountHolder[currentCardIndex].deposit(depositAmount);
      console.log(newAcc.accountHolder[currentCardIndex].AccBalance);
      selectedCard.children[1].children[4].textContent = `Effective Balance: $${newAcc.accountHolder[currentCardIndex].AccBalance}`;
      inputField.value = "";
    }
  }
  if (event.target.className == "withdraw btn btn-outline-primary") {
    console.log("Withdraw Clicked");
    // const selectedCard = event.target.parentElement.parentElement;
    // cardFunctions.addCardAfter(leftPanel, selectedCard);
  }
});

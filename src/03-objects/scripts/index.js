import { Account, AccountController } from "./account.js";
import helperFunctions from "./helperFunctions.js";

const newAcc = new AccountController("User");
// const errorDisplay = document.getElementsByClassName("error");

newAccount.addEventListener("click", () => {
  helperFunctions.addCard(
    accountName.value,
    Number(initialBalance.value),
    leftPanel
  );
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
  let highestAcc = newAcc.highestValAcc(newAcc.accountHolder);
  console.log(newAcc.accountHolder);
  resultDisplay.textContent = `Highest Value Account is: $${highestAcc}`;
});

lowValAcc.addEventListener("click", () => {
  console.log("Lowest Value Button Clicked");
  let lowestAcc = newAcc.lowestValAcc(newAcc.accountHolder);
  resultDisplay.textContent = `Lowest Value Account is: $${lowestAcc}`;
});

leftPanel.addEventListener("click", function(event) {
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    // console.log("Delete Clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let selectedAccName = selectedCard.children[0].textContent;
    console.log(selectedAccName);
    newAcc.removeAccount(selectedAccName);
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
      selectedCard.children[1].children[5].textContent = "";
      inputField.value = "";
    } else {
      selectedCard.children[1].children[5].textContent =
        "Enter Positive Dollar Amount";
    }
  }
  if (event.target.className == "withdraw btn btn-outline-primary") {
    // console.log("Withdraw Clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let inputField = selectedCard.children[1].children[0].children[0];
    let depositAmount = Number(inputField.value);
    if (depositAmount > 0) {
      let currentCardName = selectedCard.children[0].textContent;
      let currentCardIndex = newAcc.accountHolder.findIndex(
        arrayItem => arrayItem.accountName === currentCardName
      );

      if (depositAmount < newAcc.accountHolder[currentCardIndex].AccBalance) {
        newAcc.accountHolder[currentCardIndex].withdraw(depositAmount);
        selectedCard.children[1].children[5].textContent = "";
      } else {
        selectedCard.children[1].children[5].textContent = "Insufficient Funds";
      }
      selectedCard.children[1].children[4].textContent = `Effective Balance: $${newAcc.accountHolder[currentCardIndex].AccBalance}`;
      inputField.value = "";
    } else {
      selectedCard.children[1].children[5].textContent =
        "Enter Positive Dollar Amount";
    }
  }
});

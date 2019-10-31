const helperFunctions = {
  //   count: 1,
  clearInputs: (inputOne, inputTwo) => {
    inputOne.value = "";
    inputTwo.value = "";
  },
  createCard: (accName, initBalance) => {
    // this.count++;
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = `Account Name: ${accName}`;
    newCard.appendChild(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    newCard.appendChild(cardBody);

    //Balance Section
    let inputDiv = document.createElement("div");
    let inputAmount = document.createElement("input");
    inputDiv.append(inputAmount);
    inputAmount.classList.add("form-control");
    inputAmount.placeholder = "Enter Positive Dollar Amount";
    cardBody.appendChild(inputDiv);

    let depositBtn = document.createElement("button");
    depositBtn.textContent = "Deposit";
    depositBtn.classList.add("deposit", "btn", "btn-outline-primary");
    cardBody.appendChild(depositBtn);
    // node.appendChild(newCard);

    let withdrawBtn = document.createElement("button");
    withdrawBtn.textContent = "Withdraw";
    withdrawBtn.classList.add("withdraw", "btn", "btn-outline-primary");
    cardBody.appendChild(withdrawBtn);
    // node.appendChild(newCard);

    let deleteCard = document.createElement("button");
    deleteCard.textContent = "Delete";
    deleteCard.classList.add("deleteCardBtn", "btn", "btn-outline-danger");
    cardBody.appendChild(deleteCard);

    //Balance Section
    let effectiveBalance = document.createElement("div");
    effectiveBalance.textContent = `Effective Balance: $${initBalance}`;
    cardBody.appendChild(effectiveBalance);

    //Return new card
    return newCard;
  },
  addCard: node => {
    // console.log("Add Card Button Clicked");
    let newCard = helperFunctions.createCard(
      accountName.value,
      initialBalance.value
    );
    node.appendChild(newCard);
  },
  deleteCard: card => {
    // console.log("Delete Button Clicked");
    card.remove();
  }
};

export default helperFunctions;

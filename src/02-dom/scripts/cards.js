const cardFunctions = {
  count: 1,

  createCard: () => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = `Card ${cardFunctions.count++}`;
    newCard.appendChild(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    newCard.appendChild(cardBody);

    let addBefore = document.createElement("button");
    addBefore.textContent = "Add Before";
    addBefore.classList.add("addBeforeBtn");
    cardBody.appendChild(addBefore);
    // node.appendChild(newCard);

    let addAfter = document.createElement("button");
    addAfter.textContent = "Add After";
    addAfter.classList.add("addAfterBtn");
    cardBody.appendChild(addAfter);
    // node.appendChild(newCard);

    let deleteCard = document.createElement("button");
    deleteCard.textContent = "Delete";
    deleteCard.classList.add("deleteCardBtn");
    cardBody.appendChild(deleteCard);
    //Return new card
    return newCard;
  },
  addCard: node => {
    // console.log("Add Card Button Clicked");
    let newCard = cardFunctions.createCard(cardFunctions.counter);
    node.appendChild(newCard);
  },
  deleteCard: card => {
    // console.log("Delete Button Clicked");
    card.remove();
  },
  addCardBefore: (node, currentCard) => {
    // console.log("Add Before Button Clicked");
    let newCard = cardFunctions.createCard(cardFunctions.counter);
    node.insertBefore(newCard, currentCard);
  },
  addCardAfter: (node, currentCard) => {
    console.log("Add After Button Clicked");
    let newCard = cardFunctions.createCard(cardFunctions.counter);
    node.insertBefore(newCard, currentCard.nextSibling);
  }
};

export default cardFunctions;

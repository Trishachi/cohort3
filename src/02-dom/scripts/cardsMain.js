import cardFunctions from "./cards.js";

leftPanel.addEventListener("click", function(event) {
  // console.log(event.target);
  if (event.target.id == "addCard") {
    cardFunctions.addCard(leftPanel);
  }
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.deleteCard(selectedCard);
  }
  if (event.target.className == "addBeforeBtn btn btn-outline-primary") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.addCardBefore(leftPanel, selectedCard);
  }
  if (event.target.className == "addAfterBtn btn btn-outline-primary") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.addCardAfter(leftPanel, selectedCard);
  }
});

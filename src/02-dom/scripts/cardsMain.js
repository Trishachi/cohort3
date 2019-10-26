import cardFunctions from "./cards.js";

leftPanel.addEventListener("click", function(event) {
  // console.log(event.target);
  if (event.target.id == "addCard") {
    cardFunctions.addCard(leftPanel);
  }
  if (event.target.className == "deleteCardBtn") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.deleteCard(selectedCard);
  }
  if (event.target.className == "addBeforeBtn") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.addCardBefore(leftPanel, selectedCard);
  }
  if (event.target.className == "addAfterBtn") {
    const selectedCard = event.target.parentElement.parentElement;
    cardFunctions.addCardAfter(leftPanel, selectedCard);
  }
});

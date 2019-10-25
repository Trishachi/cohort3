const functions1 = {
  addCard: (node, myCounter) => {
    console.log("I am in the Card");
    // node.textContent = "I am in the Add Card";
    let newCard = document.createElement("div");
    newCard.classList.add("cardTest");
    newCard.setAttribute("counter", myCounter);
    newCard.textContent = "The Count is " + myCounter;
    node.appendChild(newCard);
  },
  whatCard: node => {
    let newList = [];
    let index = 0;
    for (let item of node.children) {
      newList[index] = item.textContent;
      index++;
    }
    console.log(newList);
    return newList;
  }
};

export default functions1;

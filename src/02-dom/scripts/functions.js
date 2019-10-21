/* Variables and Declarations */
// let box = document.getElementById("container");
let input = document.getElementById("userInput");
let list = document.getElementById("myList");
let listDisplay = document.getElementById("listResult");

let card = document.createElement("div");
let cardHeader = document.createElement("div");
let cardBody = document.createElement("div");
let b4Btn = document.createElement("button");
let addIcon = document.createElement("i");

let cardCount = 1;

// let addCard = document.getElementById("addCard");

/*  Application Functions    */
const functions = {
  inputLength: () => {
    return input.value.length;
  },
  createListElement: () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    // list.prepend(li) - To add to start of list
    input.value = "";
  },
  addListOnBtnClick: () => {
    if (functions.inputLength() > 0) {
      functions.createListElement();
    }
  },
  addListOnKeypress: event => {
    if (functions.inputLength() > 0 && event.keyCode === 13) {
      functions.createListElement();
    }
  },
  deleteItem: () => {
    list.removeChild(list.lastElementChild);
  },
  showList: () => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Current List:"));
    listDisplay.appendChild(p);
    let newList = list.cloneNode(true);
    listDisplay.append(newList);
    // Make List not to display again on subsequent click without change
    // list = [];
  },
  createNewCard: () => {
    let mainCard = document.getElementById("card1");
    let cardTitle = document.getElementById("cardHeader");
    let clonedCard = mainCard.cloneNode(true);
    cardCount++;
    cardTitle.innerText = `Card ${cardCount}`;
    leftPanel.append(clonedCard);

    // card.classList.add("card", "text-center");
    // cardHeader.classList.add("card-header");
    // cardBody.classList.add("card-body");

    // cardHeader.appendChild(document.createTextNode("Card 2"));
    // functions.createB4Btn();
    // cardBody.appendChild(b4Btn);
    // card.appendChild(cardHeader);
    // card.appendChild(cardBody);

    // leftPanel.appendChild(card);
  },
  addNewCardBtn: () => {
    console.log("Add Card Button Clicked");
    functions.createNewCard();
  },
  createB4Btn: () => {
    b4Btn.classList.add("btn", "btn-outline-primary");
    addIcon.classList.add("fas", "fa-plus");
    b4Btn.appendChild(addIcon);
    b4Btn.appendChild(document.createTextNode(" Add Before"));
  }
};

export default functions;

addCard.addEventListener("click", functions.addNewCardBtn);

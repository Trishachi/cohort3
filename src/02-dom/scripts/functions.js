/* Variables and Declarations */
let input = document.getElementById("userInput");
let showButton = document.getElementById("show");
// let box = document.getElementById("container");
let list = document.getElementById("myList");
let listDisplay = document.getElementById("listResult");

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
    console.log("Delete Button Clicked");
    list.removeChild(list.lastElementChild);
  },
  showList: () => {
    console.log("Show Button Clicked");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Current List:"));
    listDisplay.appendChild(p);
    let newList = list.cloneNode(true);
    listDisplay.append(newList);
    // Make List not to display again on subsequent click without change
    // list = [];
  }
};

export default functions;

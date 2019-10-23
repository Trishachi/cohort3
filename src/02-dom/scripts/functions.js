/* Variables and Declarations */
let box = document.getElementById("container");

let list = document.getElementById("myList");
let listDisplay = document.getElementById("listResult");

/*  Application Functions    */
const functions = {
  createListElement: olList => {
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`Item ${olList.children.length + 1}`)
    );
    olList.appendChild(li);
    // list.prepend(li) - To add to start of list
  },
  deleteItem: () => {
    if (list.children.length) {
      list.removeChild(list.lastElementChild);
    }
  },
  showList: listItemsArr => {
    let p = document.createElement("p");
    // let newList = list.cloneNode(true);
    let newList = [];
    for (var item of listItemsArr) {
      newList.push(item.textContent);
    }
    p.appendChild(document.createTextNode(`Current List: ${newList}`));
    listDisplay.appendChild(p);
  }
};

export default functions;

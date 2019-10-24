/* Variables and Declarations */
// let box = document.getElementById("container");

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
  deleteItem: list => {
    if (list.children.length) {
      list.removeChild(list.lastElementChild);
    }
  },
  showList: listItemsArr => {
    let p = document.createElement("p");
    let newList = [];
    let index = 0;
    for (let item of listItemsArr.children) {
      newList[index] = item.textContent;
      index++;
    }
    p.appendChild(document.createTextNode(`Current List: ${newList}`));
    listResult.appendChild(p);
    // console.log(newList);
    return newList;
  }
};

export default functions;

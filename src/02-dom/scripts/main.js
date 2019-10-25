import functions from "./functions.js";

/* Variables and Declarations */
let addButton = document.getElementById("add");
let deleteButton = document.getElementById("delete");
let showButton = document.getElementById("show");

/************* Function Calls ***************/
// functions.createListElement(myList);

/************* Event Listeners***************/

// box.addEventListener("click", event => console.log(event));
add.addEventListener("click", () => {
  functions.createListElement(myList);
});
// deleteButton.addEventListener("click", functions.deleteItem);
deleteButton.addEventListener("click", () => {
  functions.deleteItem(myList);
});
showButton.addEventListener("click", () => {
  functions.showList(myList);
});

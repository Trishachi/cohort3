import functions from "./functions.js";

/* Variables and Declarations */
let addButton = document.getElementById("add");
let input = document.getElementById("userInput");
let deleteButton = document.getElementById("delete");
let showButton = document.getElementById("show");

/* Event Listeners  */

// box.addEventListener("click", event => console.log(event));

addButton.addEventListener("click", functions.addListOnBtnClick);
input.addEventListener("keypress", functions.addListOnKeypress);
deleteButton.addEventListener("click", functions.deleteItem);
showButton.addEventListener("click", functions.showList);

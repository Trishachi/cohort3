let button = document.getElementById("Click");
let input = document.getElementById("getInput");
let result = document.getElementById("result");
let heading = document.getElementById("heading");


function onButtonClicked() {
    let num = Number(input.value);
    if(num == ""){
        result.innerHTML = "Please Enter a Valid Number";
    } else {
        result.innerHTML = "Your Input is " + size(num);
        console.log(size(num));
   } 
   input.value = "";   
}

function size(myNum){
    if(myNum <= 10){
       return "Small"; 
    } else if(myNum > 10 && myNum <= 19){
        return "Meduim";
    } else if(myNum >= 20){
        return "Large";
    } else {
        return "Not Applicable"
    }
}

function enterKeypress(event) {
	if (event.keyCode === 13) {
        // console.log("Enter Pressed");
		onButtonClicked();
	}
}

function showInstructions(){
    heading.innerText = "Instructions: Enter a number into the input field and click the button to find the size of the number";
}

function hideInstructions(){
    heading.innerText = "Hello World from HTML";
}

console.log("Hello World from basic.js");

input.addEventListener("keypress", enterKeypress);
button.addEventListener("click", onButtonClicked);
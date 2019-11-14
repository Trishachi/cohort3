import { City, Community } from "./cityFunctions.js";
import cityHelpers from "./cityHelpers.js";
import cityFetchFunctions from "./cityFetch.js";

resultDisplay.textContent = `Server is Ready!`;

const newComm = new Community();
let keyCounter;

let lastKey = cityFetchFunctions.getCitiesOnServer(newComm);
lastKey.then(
  result => {
    keyCounter = result + 1;
    if (newComm.cityRoster.length >= 1) {
      resultDisplay.textContent = `Success: Last key found!`;
    } else {
      resultDisplay.textContent = `Success: Server is Running!`;
    }
  },
  reject => (resultDisplay.textContent = `Error: No key found!`)
);

window.addEventListener("load", async event => {
  // console.log("Server Starting");
  let data = await cityFetchFunctions.htmlReloadCities();
  newComm.cityRoster = data;
  console.log(data);
  console.log(newComm.cityRoster);
});

rightPanel.addEventListener("click", async event => {
  if (event.target.id == "addNewCity") {
    // console.log("Add New City Button Clicked");
    cityHelpers.addCityCard(
      cityName.value,
      Number(latitudeInput.value),
      Number(longitudeInput.value),
      Number(population.value),
      leftPanel
    );
    newComm.createCity(
      Number(keyCounter),
      cityName.value,
      Number(latitudeInput.value),
      Number(longitudeInput.value),
      Number(population.value)
    );

    cityName.value = latitudeInput.value = longitudeInput.value = population.value =
      "";
    console.log(newComm.cityRoster);
    await cityFetchFunctions.postToServer(
      newComm.cityRoster.filter(item => item.key == keyCounter)[0]
    );
    keyCounter++;
  }
  if (event.target.id == "mostNorth") {
    // console.log("Most North City Button Clicked");
    let mostNorth = newComm.getMostNorthern(newComm.cityRoster);
    resultDisplay.textContent = `Most Northern City is: ${mostNorth.cityName}`;
  }
  if (event.target.id == "mostSouth") {
    // console.log("Most South City Button Clicked");
    let mostSouth = newComm.getMostSouthern(newComm.cityRoster);
    resultDisplay.textContent = `Most Southern City is: ${mostSouth.cityName}`;
  }
  if (event.target.id == "totalPopulation") {
    // console.log("Total Population Button Clicked");
    let totalPopulation = newComm.getPopulation(newComm.cityRoster);
    console.log(newComm.cityRoster);
    resultDisplay.textContent = `Total Population is: ${totalPopulation}`;
  }
});

leftPanel.addEventListener("click", async event => {
  // console.log(event.target);
  if (event.target.className == "movedIn btn btn-outline-primary") {
    // console.log("Moved In button clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let inputField = selectedCard.children[1].children[0].children[0];
    let movedInAmt = Number(inputField.value);
    if (movedInAmt > 0) {
      let currentCardTitle = selectedCard.children[0].textContent;
      let currentCardIndex = newComm.cityRoster.findIndex(
        arrayItem => arrayItem.cityName == currentCardTitle
      );
      newComm.cityRoster[currentCardIndex].movedIn(movedInAmt);
      await cityFetchFunctions.updateServer(
        newComm.cityRoster[currentCardIndex]
      );
      selectedCard.children[1].children[5].textContent = `Current Population: ${
        newComm.cityRoster[currentCardIndex].population
      } (${newComm.cityRoster[currentCardIndex].howBig()})`;
      // console.log(newComm.cityRoster[currentCardIndex].population);
      inputField.value = "";
    }
  }
  if (event.target.className == "movedOut btn btn-outline-primary") {
    // console.log("Moved Out button clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let inputField = selectedCard.children[1].children[0].children[0];
    let movedOutAmt = Number(inputField.value);
    if (movedOutAmt > 0) {
      let currentCardTitle = selectedCard.children[0].textContent;
      let currentCardIndex = newComm.cityRoster.findIndex(
        arrayItem => arrayItem.cityName == currentCardTitle
      );
      newComm.cityRoster[currentCardIndex].movedOut(movedOutAmt);
      await cityFetchFunctions.updateServer(
        newComm.cityRoster[currentCardIndex]
      );
      selectedCard.children[1].children[5].textContent = `Current Population: ${
        newComm.cityRoster[currentCardIndex].population
      } (${newComm.cityRoster[currentCardIndex].howBig()})`;
      // console.log(newComm.cityRoster[currentCardIndex].population);
      inputField.value = "";
    }
  }
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    // console.log("Delete City button clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let currentCardTitle = selectedCard.children[0].textContent;
    let currentCardIndex = newComm.cityRoster.findIndex(
      arrayItem => arrayItem.cityName == currentCardTitle
    );
    let currentCardKey = newComm.cityRoster[currentCardIndex].key;
    newComm.deleteCity(currentCardKey);
    cityHelpers.deleteCityCard(selectedCard);
    await cityFetchFunctions.deleteFromServer(currentCardKey);
    console.log(newComm.cityRoster);
  }
});

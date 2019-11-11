import { City, Community } from "./cityFunctions.js";
import cityHelpers from "./cityHelpers.js";

const url = "http://localhost:5000/";

const newComm = new Community();
let keyCounter = 1;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

async function postToServer(newCity) {
  let data = await postData(url + "add", newCity);
  return data;
}

async function updateServer(currentCity) {
  let data = await postData(url + "update", currentCity);
  return data;
}

async function deleteFromServer(cityKey) {
  let data = await postData(url + "delete", { key: cityKey });
  return data;
}

rightPanel.addEventListener("click", async event => {
  if (event.target.id == "addNewCity") {
    // console.log("Add New City Button Clicked");
    cityHelpers.addCityCard(
      cityName.value,
      latitudeInput.value,
      longitudeInput.value,
      population.value,
      leftPanel
    );
    newComm.createCity(
      Number(keyCounter),
      cityName.value,
      latitudeInput.value,
      longitudeInput.value,
      Number(population.value)
    );

    cityName.value = latitudeInput.value = longitudeInput.value = population.value =
      "";
    console.log(newComm.cityRoster);
    await postToServer(
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
      let currentCardKey = selectedCard.children[0].textContent;
      let currentCardIndex = newComm.cityRoster.findIndex(
        arrayItem => arrayItem.key == currentCardKey
      );
      newComm.cityRoster[currentCardIndex].movedIn(movedInAmt);
      await updateServer(newComm.cityRoster[currentCardIndex]);
      selectedCard.children[1].children[5].textContent = `Current Population: ${newComm.cityRoster[currentCardIndex].population}`;
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
      let currentCardKey = selectedCard.children[0].textContent;
      let currentCardIndex = newComm.cityRoster.findIndex(
        arrayItem => arrayItem.key == currentCardKey
      );
      newComm.cityRoster[currentCardIndex].movedOut(movedOutAmt);
      await updateServer(newComm.cityRoster[currentCardIndex]);
      selectedCard.children[1].children[5].textContent = `Current Population: ${newComm.cityRoster[currentCardIndex].population}`;
      // console.log(newComm.cityRoster[currentCardIndex].population);
      inputField.value = "";
    }
  }
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    // console.log("Delete City button clicked");
    let selectedCard = event.target.parentElement.parentElement;
    let currentCardTitle = selectedCard.children[0].textContent;
    let currentCardIndex = newComm.cityRoster.findIndex(
      arrayItem => arrayItem.key == currentCardTitle
    );
    let currentCardKey = newComm.cityRoster[currentCardIndex].key;
    newComm.deleteCity(currentCardKey);
    cityHelpers.deleteCityCard(selectedCard);
    await deleteFromServer(currentCardKey);
    console.log(newComm.cityRoster);
  }
});

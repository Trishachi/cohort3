import { City, Community } from "./cityFunctions.js";
import cityHelpers from "./cityHelpers.js";

const newComm = new Community();
let keyCounter = 0;

rightPanel.addEventListener("click", event => {
  if (event.target.id == "addNewCity") {
    console.log("Add New City Button Clicked");
    keyCounter++;
    cityHelpers.addCityCard(cityName.value, leftPanel);
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
  }
  if (event.target.id == "mostNorth") {
    console.log("Most North City Button Clicked");
    let mostNorth = newComm.getMostNorthern(newComm.cityRoster);
    resultDisplay.textContent = `Most Northern City is: ${mostNorth.cityName}`;
  }
  if (event.target.id == "mostSouth") {
    console.log("Most South City Button Clicked");
    let mostSouth = newComm.getMostSouthern(newComm.cityRoster);
    resultDisplay.textContent = `Most Southern City is: ${mostSouth.cityName}`;
  }
  if (event.target.id == "totalPopulation") {
    console.log("Total Population Button Clicked");
    let totalPopulation = newComm.getPopulation(newComm.cityRoster);
    resultDisplay.textContent = `Total Population is: ${totalPopulation}`;
  }
});

leftPanel.addEventListener("click", event => {
  console.log(event.target);
  if (event.target.className == "movedIn btn btn-outline-primary") {
    console.log("Moved In button clicked");
  }
  if (event.target.className == "movedOut btn btn-outline-primary") {
    console.log("Moved Out button clicked");
  }
  if (event.target.className == "deleteCardBtn btn btn-outline-danger") {
    console.log("Delete City button clicked");
    let selectedCard = event.target.parentElement.parentElement;
    cityHelpers.deleteCityCard(selectedCard);
  }
});

import { City } from "./cityFunctions.js";

test("Tests for City Initializations", () => {
  let newCity = new City("Lagos", 32.8, 45.8, 1000);
  newCity.show();
});

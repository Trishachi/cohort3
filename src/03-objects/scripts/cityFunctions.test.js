import { City, Community } from "./cityFunctions.js";
import cityHelpers from "./cityHelpers.js";

const newCommunity = new Community();
newCommunity.createCity(1, "Lagos", 6.465422, 3.406448, 17500000);
newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
newCommunity.createCity(3, "Ottawa", 45.421532, -75.697189, 20000);
newCommunity.createCity(4, "Port Harcourt", 4.77149, 7.01435, 1000);
newCommunity.createCity(5, "Salvado", -26.93008, -49.10392, 99);
newCommunity.createCity(6, "Awka", 0, 0, 99);
//   console.log(newCommunity.cityRoster);

test("Tests for City Initializations", () => {
  //   let newCity = new City(1, "Lagos", 6.465422, 3.406448, 17500000);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17500000"
  );
  newCommunity.cityRoster[0].movedIn(500);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17500500"
  );
  newCommunity.cityRoster[0].movedOut(1000);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17499500"
  );
  expect(newCommunity.cityRoster[0].howBig()).toBe("City");
  expect(newCommunity.cityRoster[1].howBig()).toBe("Large Town");
  expect(newCommunity.cityRoster[2].howBig()).toBe("Town");
  expect(newCommunity.cityRoster[3].howBig()).toBe("Village");
  expect(newCommunity.cityRoster[4].howBig()).toBe("Hamlet");
});

describe("Community Controller Methods Tests", () => {
  test("Testing whichSphere Method", () => {
    expect(newCommunity.whichSphere(newCommunity.cityRoster[0])).toBe(
      "Northern Hemishpere"
    );
    expect(newCommunity.whichSphere(newCommunity.cityRoster[4])).toBe(
      "Southern Hemishpere"
    );
    expect(newCommunity.whichSphere(newCommunity.cityRoster[5])).toBe(
      "Equator"
    );
  });

  test("Testing getMostSouthern Method", () => {
    expect(newCommunity.getMostSouthern(newCommunity.cityRoster)).toEqual({
      cityName: "Salvado",
      key: 5,
      latitude: -26.93008,
      longitude: -49.10392,
      population: 99
    });
  });

  test("Testing getMostNorthern Method", () => {
    expect(newCommunity.getMostNorthern(newCommunity.cityRoster)).toEqual({
      cityName: "Calgary",
      key: 2,
      latitude: 51.04427,
      longitude: -114.062019,
      population: 99000
    });
  });

  test("Testing getPopulation Method", () => {
    expect(newCommunity.getPopulation(newCommunity.cityRoster)).toEqual(
      17619698
    );
  });

  test("Testing deleteCity Method", () => {
    newCommunity.deleteCity(1);
    newCommunity.deleteCity(2);
    newCommunity.deleteCity(3);
    newCommunity.deleteCity(4);
    // console.log(newCommunity.cityRoster);
    expect(newCommunity.cityRoster).toEqual([
      { cityName: "Awka", key: 6, latitude: 0, longitude: 0, population: 99 },
      {
        cityName: "Salvado",
        key: 5,
        latitude: -26.93008,
        longitude: -49.10392,
        population: 99
      }
    ]);
  });
});

//**********************************Helper Functions Tests***************************************/
test("Check Card Funtions", () => {
  let div = document.createElement("div");
  expect(div.childElementCount).toBe(0);
  let newCard1 = cityHelpers.addCityCard(
    "Calgary",
    "51.04427",
    "-114.062019",
    99000,
    div
  );
  expect(div.childElementCount).toBe(1);
  let newCard2 = cityHelpers.addCityCard(
    "Ottawa",
    "91.0427",
    "-94.062019",
    50000,
    div
  );
  cityHelpers.deleteCityCard(newCard2);
  expect(div.childElementCount).toBe(1);
});

//**********************************Comp 130E Tests***************************************/
describe("Testing for Competency 130E", () => {
  test("Comp 130E", () => {
    let myCity = new City(7, "Nimo", 6.16062, 6.988009, 5000);
    let myFav = myCity;
    myCity.movedIn(500);
    expect(myCity.population).toBe(5500);
    expect(myFav.population).toBe(5500);
  });
});

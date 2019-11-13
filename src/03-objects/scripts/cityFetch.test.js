global.fetch = require("node-fetch"); //load fetch module via require

import { City, Community } from "./cityFunctions.js";
import cityFetchFunctions from "./cityFetch.js";

const url = "http://localhost:5000/";

describe("Testing Fetch Functions", () => {
  test("Tests for server fetch functions", async () => {
    let data = await cityFetchFunctions.clearServer();
    expect(data).toEqual({});

    let newCommunity = new Community();
    newCommunity.createCity(1, "Lagos", 6.465422, 3.406448, 17500000);

    await cityFetchFunctions.postToServer(newCommunity.cityRoster[0]);
    expect(await cityFetchFunctions.getCitiesOnServer()).toEqual([
      {
        cityName: "Lagos",
        key: 1,
        latitude: 6.465422,
        longitude: 3.406448,
        population: 17500000
      }
    ]);
    newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
    await cityFetchFunctions.postToServer(newCommunity.cityRoster[1]);

    await cityFetchFunctions.deleteFromServer(1);
    // console.log(await cityFetchFunctions.getCitiesOnServer());
    expect(await cityFetchFunctions.getCitiesOnServer()).toEqual([
      {
        cityName: "Calgary",
        key: 2,
        latitude: 51.04427,
        longitude: -114.062019,
        population: 99000
      }
    ]);
    await cityFetchFunctions.updateServer({
      key: 2,
      cityName: "Calgary",
      latitude: 51.04427,
      longitude: -114.062019,
      population: 50000
    });
    // console.log(await cityFetchFunctions.getCitiesOnServer());
    expect(await cityFetchFunctions.getCitiesOnServer()).toEqual([
      {
        cityName: "Calgary",
        key: 2,
        latitude: 51.04427,
        longitude: -114.062019,
        population: 50000
      }
    ]);
    await cityFetchFunctions.clearServer();
  });
});

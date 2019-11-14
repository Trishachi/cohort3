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
    expect(await cityFetchFunctions.getCitiesOnServer(newCommunity)).toBe(1);

    newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
    await cityFetchFunctions.postToServer(newCommunity.cityRoster[1]);
    await cityFetchFunctions.getCitiesOnServer(newCommunity);

    // console.log(await cityFetchFunctions.getCitiesOnServer());

    await cityFetchFunctions.deleteFromServer(1);
    await cityFetchFunctions.getCitiesOnServer(newCommunity);
    // // console.log(await cityFetchFunctions.getCitiesOnServer());
    expect(await cityFetchFunctions.getCitiesOnServer(newCommunity)).toBe(2);
    await cityFetchFunctions.updateServer({
      key: 2,
      cityName: "Calgary",
      latitude: 51.04427,
      longitude: -114.062019,
      population: 50000
    });
    await cityFetchFunctions.getCitiesOnServer(newCommunity);
    // console.log(
    //   newCommunity.cityRoster.filter(item => item.key === 2)[0].population
    // );
    expect(
      newCommunity.cityRoster.filter(item => item.key === 2)[0].population
    ).toBe(50000);
    await cityFetchFunctions.clearServer();
  });
});

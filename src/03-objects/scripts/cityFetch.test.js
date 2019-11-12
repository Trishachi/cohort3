global.fetch = require("node-fetch"); //load fetch module via require

import { City, Community } from "./cityFunctions.js";
import cityFetchFunctions from "./cityFetch.js";

const url = "http://localhost:5000/";


describe("Testing Fetch Functions", () => {
   beforeEach(async () => {
       await cityFetchFunctions.
   }) 

  test("Tests for fetch functions", async () => {
    const newCommunity = new Community();
    newCommunity.createCity(1, "Lagos", 6.465422, 3.406448, 17500000);
    // newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
    // newCommunity.createCity(3, "Ottawa", 45.421532, -75.697189, 20000);

    let data = await cityFetchFunctions.postToServer(myCommunity.cityRoster[0]);

    expect(data.status).toEqual(200);
    // await cityFetchFunctions.postToServer(myCommunity.cityRoster[1]);
    // await cityFetchFunctions.postToServer(myCommunity.cityRoster[2]);

    // expect(await cityFetchFunctions.getCitiesOnServer()).toEqual([
    //   {
    //     cityName: "Lagos",
    //     key: 1,
    //     latitude: 6.465422,
    //     longitude: 3.406448,
    //     population: 17500000
    //   },
    //   {
    //     cityName: "Calgary",
    //     key: 2,
    //     latitude: 51.04427,
    //     longitude: -114.062019,
    //     population: 99000
    //   },
    //   {
    //     cityName: "Ottawa",
    //     key: 3,
    //     latitude: 45.421532,
    //     longitude: -75.697189,
    //     population: 20000
    //   }
    // ]);
  });
});

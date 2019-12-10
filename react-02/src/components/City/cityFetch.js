import { City, Community } from "./cityFunctions.js";

const url = "http://localhost:5000/";
const newComm = new Community();

const cityFetchFunctions = {
  async postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    const json = await response.json(); // parses JSON response into native JavaScript objects
    return json;
  },
  async postToServer(newCity) {
    let data = await this.postData(url + "add", newCity);
    return data;
  },
  async updateServer(currentCity) {
    let data = await this.postData(url + "update", currentCity);
    return data;
  },
  async deleteFromServer(cityKey) {
    let data = await this.postData(url + "delete", { key: cityKey });
    return data;
  },
  async getCitiesOnServer(newComm) {
    let data = await this.postData(url + "all");
    // console.log(newComm.cityRoster);
    if (data.length != 0) {
      newComm.cityRoster = data.map(
        item =>
          new City(
            item.key,
            item.cityName,
            item.latitude,
            item.longitude,
            item.population
          )
      );
      let keyArrays = newComm.cityRoster.map(itm => itm.key);
      keyArrays.sort((a, b) => b - a);
      let lastKey = keyArrays[0];
      return lastKey;
    }
    let lastKey = 0;
    return lastKey;
  },
  async clearServer() {
    let data = await this.postData(url + "clear");
    return data;
  }
  //   async htmlReloadCities() {
  //     fetch("http://localhost:5000/all")
  //       .then(request => request.json())
  //       .then(data => {
  //         data.map(serverCity => {
  //           newComm.createCity(
  //             Number(serverCity.key),
  //             serverCity.cityName,
  //             Number(serverCity.latitude),
  //             Number(serverCity.longitude),
  //             Number(serverCity.population)
  //           );
  //           cityHelpers.addCityCard(
  //             serverCity.cityName,
  //             Number(serverCity.latitude),
  //             Number(serverCity.longitude),
  //             Number(serverCity.population),
  //             leftPanel
  //           );
  //         });
  //       });
  //     return newComm.cityRoster;
  //   }
};

export default cityFetchFunctions;

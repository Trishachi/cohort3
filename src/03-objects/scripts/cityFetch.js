import { City, Community } from "./cityFunctions.js";
import cityHelpers from "./cityHelpers.js";

const url = "http://localhost:5000/";
const newComm = new Community();

const cityFetchFunctions = {
  async postData(url = "", data = {}) {
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
    // json.status = response.status;
    // json.statusText = response.statusText;
    // console.log(json, typeof(json));
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
  async getCitiesOnServer() {
    let data = await this.postData(url + "all");
    return data;
  },
  async clearServer() {
    let data = await this.postData(url + "clear");
    return data;
  }
};

export default cityFetchFunctions;

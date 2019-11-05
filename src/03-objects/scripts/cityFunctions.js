export class City {
  constructor(cityName, latitude, longitude, population) {
    this.cityName = cityName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
  }
  show() {
    console.log("Cities");
    return "";
  }
}

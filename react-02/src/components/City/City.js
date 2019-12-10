import React from "react";
import "../Accounts/Account.css";
import "./City.css";
import MsgDisplay from "./MsgDisplay.js";
import AddCityForm from "./AddCityForm";
import CommDisplay from "./CommDisplay";
import { Community } from "./cityFunctions";
import CityCard from "./CityCard";

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      keyCounter: 0,
      northMost: " ",
      southMost: "",
      totalPopulation: 0
    };
    this.cityController = new Community();
  }

  addReactCity = params => {
    let cityCounter = this.state.keyCounter;
    const { cityName, latitude, longitude, population } = params;
    this.cityController.createCity(
      cityCounter,
      cityName,
      latitude,
      longitude,
      Number(population)
    );
    console.log(this.cityController.cityRoster);
    this.setState(newState => {
      return {
        keyCounter: newState.keyCounter + 1
      };
    });
    this.updateCities();
  };

  deleteReactCity = keyIndex => {
    this.cityController.deleteCity(keyIndex);
    console.log(this.cityController.cityRoster);
    this.updateCities();
  };

  updateCities = () => {
    if (this.cityController.cityRoster.length < 1) {
      this.setState({ northMost: "", southMost: "", totalPopulation: 0 });
      return;
    }
    const northMostCity = this.cityController.getMostNorthern(
      this.cityController.cityRoster
    );
    const southMostCity = this.cityController.getMostSouthern(
      this.cityController.cityRoster
    );
    const communityPopulation = this.cityController.getPopulation(
      this.cityController.cityRoster
    );

    this.setState({
      northMost: northMostCity.cityName,
      southMost: southMostCity.cityName,
      totalPopulation: communityPopulation
    });
  };

  addCityCard = () => {
    return this.cityController.cityRoster.map(city => {
      return (
        <CityCard
          key={city.key}
          cityCard={city}
          cardName={city.cityName}
          updateCityCard={this.updateCities}
          deleteCityCard={this.deleteReactCity}
          cardKey={city.key}
        />
      );
    });
  };

  render() {
    const card = this.addCityCard();
    return (
      <React.Fragment>
        <h1 className="spacer">Community Management Dashboard</h1>
        <div id="wrapper" className="container">
          <div className="row row-grid">
            <div className="col-md-6">
              <div id="leftPanel" className="col-md-12">
                <h4 className="panelTitle">City Roster</h4>
                {card}
              </div>
            </div>
            <div className="col-md-6">
              <div id="rightPanel" className="col-md-12">
                <h4 className="panelTitle">Community Summary</h4>
                <hr></hr>
                <MsgDisplay />
                <hr></hr>
                <AddCityForm onSubmit={this.addReactCity} />
                <CommDisplay
                  mostNorthernCity={this.state.northMost}
                  mostSouthernCity={this.state.southMost}
                  commPopulation={this.state.totalPopulation}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default City;

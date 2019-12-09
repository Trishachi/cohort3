import React from "react";
import "../Accounts/Account.css";
import "./City.css";
import MsgDisplay from "./MsgDisplay.js";
import AddCityForm from "./AddCityForm";
import CommDisplay from "./CommDisplay";
import { Community } from "./cityFunctions";

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      keyCounter: 0
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
      population
    );
    console.log(this.cityController.cityRoster);
    this.setState(newState => {
      return {
        keyCounter: newState.keyCounter + 1
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="spacer">Community Management Dashboard</h1>
        <div id="wrapper" className="container">
          <div className="row row-grid">
            <div className="col-md-6">
              <div id="leftPanel" className="col-md-12">
                <h4 className="panelTitle">City Roster</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div id="rightPanel" className="col-md-12">
                <h4 className="panelTitle">Community Summary</h4>
                <hr></hr>
                <MsgDisplay />
                <hr></hr>
                <AddCityForm onSubmit={this.addReactCity} />
                <CommDisplay />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default City;

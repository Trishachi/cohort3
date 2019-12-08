import React, { Fragment } from "react";
import "../Accounts/Account.css";
import "./City.css";

class AddCityForm extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <h5 className="panelTitle">Build Community</h5>
        <div className="form-group row">
          <label htmlFor="cityName" className="col-sm-4 col-form-label">
            City Name:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="cityName"
              placeholder="Enter New City Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="latitudeInput" className="col-sm-4 col-form-label">
            Latitude:
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="latitudeInput"
              placeholder="Enter Latitude"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="longitudeInput" className="col-sm-4 col-form-label">
            Longitude:
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="longitudeInput"
              placeholder="Enter Longitude"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="population" className="col-sm-4 col-form-label">
            Population:
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="population"
              placeholder="Enter Population"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <button id="addNewCity" type="submit" className="btn btn-primary">
              Add New City
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddCityForm;

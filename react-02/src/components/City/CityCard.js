import React, { Fragment } from "react";

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCard: this.props.cityCard
    };
  }

  render() {
    let { cityName, latitude, longitude, population } = this.props.cityCard;
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">{cityName}</div>
          <div className="card-body">
            <div className="spacerBottom">
              <input className="form-control" placeholder="Enter Value" />
            </div>
            <button className="movedIn btn btn-outline-primary">
              Moved In
            </button>
            <button className="movedOut btn btn-outline-primary">
              Moved Out
            </button>
            <button className="deleteCardBtn btn btn-outline-danger">
              Delete
            </button>
            <div className="spacerTop">
              Latitude: {latitude} | Longitude: {longitude}
            </div>
            <div className="spacer">Current Population: {population}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CityCard;

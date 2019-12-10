import React, { Fragment } from "react";

class CityCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">Calgary</div>
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
            <div className="spacerTop">Latitude: 56 | Longitude: 89</div>
            <div className="spacer">Current Population: 1200</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CityCard;

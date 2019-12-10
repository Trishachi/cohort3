import React, { Fragment } from "react";

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCard: this.props.cityCard,
      cardInput: "",
      citySize: ""
    };
    this.handleCardInput = this.handleCardInput.bind(this);
  }

  handleCardInput(event) {
    this.setState({ cardInput: event.target.value });
  }

  handleMovedInButton = event => {
    event.preventDefault(event);
    let movedInAmount = Number(this.state.cardInput);
    // console.log(this.state.cardInput);
    if (movedInAmount > 0) {
      this.state.cityCard.movedIn(movedInAmount);
      const updatedMovedInCard = this.state.cityCard;
      this.setState({
        cityCard: updatedMovedInCard,
        cardInput: ""
      });
      this.props.updateCityCard();
      this.showCitySize();
    }
  };

  handleMovedOutButton = event => {
    event.preventDefault(event);
    let movedOutAmount = Number(this.state.cardInput);
    if (movedOutAmount > 0) {
      this.state.cityCard.movedOut(movedOutAmount);
      const updatedMovedOutCard = this.state.cityCard;
      this.setState({
        cityCard: updatedMovedOutCard,
        cardInput: ""
      });
      this.props.updateCityCard();
      this.showCitySize();
    }
  };

  showCitySize = () => {
    const howBig = this.state.cityCard.howBig();
    this.setState({
      citySize: `(${howBig})`
    });
  };

  handleDeleteBUtton = () => {};

  render() {
    let { cityName, latitude, longitude, population } = this.props.cityCard;
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">{cityName}</div>
          <div className="card-body">
            <div className="spacerBottom">
              <input
                className="form-control"
                placeholder="Enter Value"
                value={this.state.cardInput}
                onChange={this.handleCardInput}
                type="number"
              />
            </div>
            <button
              className="movedIn btn btn-outline-primary"
              onClick={this.handleMovedInButton}
            >
              Moved In
            </button>
            <button
              className="movedOut btn btn-outline-primary"
              onClick={this.handleMovedOutButton}
            >
              Moved Out
            </button>
            <button className="deleteCardBtn btn btn-outline-danger">
              Delete
            </button>
            <div className="spacerTop">
              Latitude: {latitude} | Longitude: {longitude}
            </div>
            <div className="spacer">
              Current Population: {population} {this.state.citySize}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CityCard;

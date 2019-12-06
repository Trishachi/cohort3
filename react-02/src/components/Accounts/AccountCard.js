import React, { Fragment } from "react";

class AccountCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountCard: this.props.accountCard
    };
  }

  handleDeleteButton = () => {
    console.log("Delete Button Clicked");
    this.props.deleteAccCard(this.props.cardName);
    const updatedCard = this.state.accountCard;
    this.setState({
      accountCard: updatedCard
    });
    this.props.updateAccCard();
  };

  render() {
    let { accountName, AccBalance } = this.state.accountCard;
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">{accountName}</div>
          <div className="card-body">
            <div>
              <input
                className="form-control"
                placeholder="Enter Positive Dollar Amount"
              />
            </div>
            <button className="deposit btn btn-outline-primary">Deposit</button>
            <button className="withdraw btn btn-outline-primary">
              Withdraw
            </button>
            <button
              className="deleteCardBtn btn btn-outline-danger"
              onClick={this.handleDeleteButton}
            >
              Delete
            </button>
            <div>Effective Balance: ${AccBalance}</div>
            <div className="error"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AccountCard;

import React, { Fragment } from "react";

class AccountCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountCard: this.props.accountCard,
      amount: " ",
      cardErrorMessage: " "
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleDepositButton = event => {
    event.preventDefault(event);
    let depositAmount = Number(this.state.amount);

    if (depositAmount > 0) {
      console.log("Deposited Value: ", depositAmount);
      this.state.accountCard.deposit(depositAmount);
      const updatedDepositCard = this.state.accountCard;
      this.setState({
        accountCard: updatedDepositCard,
        amount: " ",
        cardErrorMessage: " "
      });
      this.props.updateAccCard();
    } else {
      this.setState({
        cardErrorMessage: "Enter Positive Dollar Amount"
      });
    }
  };

  handleDeleteButton = () => {
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
            <div className="spacerBottom">
              <input
                className="form-control"
                placeholder="Enter Positive Dollar Amount"
                type="number"
                onChange={this.handleFormChange}
                value={this.state.amount}
              />
            </div>
            <button
              className="deposit btn btn-outline-primary"
              onClick={this.handleDepositButton}
            >
              Deposit
            </button>
            <button className="withdraw btn btn-outline-primary">
              Withdraw
            </button>
            <button
              className="deleteCardBtn btn btn-outline-danger"
              onClick={this.handleDeleteButton}
            >
              Delete
            </button>
            <div className="spacerTop">Effective Balance: ${AccBalance}</div>
            <div className="error spacerTop">{this.state.cardErrorMessage}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AccountCard;

import React from "react";
import "./Account.css";
import { Account, AccountController } from "./accountFunctions";

class AccountComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountController: new AccountController(),
      accName: "",
      accBalance: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  // handleAccName = event => {
  //   this.setState({ accName: event.target.value });
  // };

  // handleAccBalance = event => {
  //   this.setState({ accBalance: event.target.value });
  // };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    alert(
      "Input Value is: " + this.state.accName + " and " + this.state.accBalance
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Accounts Dashboard</h1>
        <div id="wrapper" className="container">
          <div className="row row-grid">
            <div className="col-md-6">
              <div id="leftPanel" className="col-md-12">
                <h4 className="panelTitle">Accounts</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div id="rightPanel" className="col-md-12">
                <h4 className="panelTitle">Account Summary</h4>
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="accountName"
                      className="col-sm-4 col-form-label"
                    >
                      Account Name:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="accountName"
                        name="accName"
                        placeholder="Enter Account Name"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="initBalance"
                      className="col-sm-4 col-form-label"
                    >
                      Opening Balance:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="initialBalance"
                        name="accBalance"
                        placeholder="Enter Opening Balance"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <button
                        id="newAccount"
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleOnSubmit}
                      >
                        Create New Account
                      </button>
                    </div>
                  </div>
                </form>
                <hr></hr>
                <div>
                  <div id="accOptions" className="">
                    <h5 className="panelTitle text-center">Account Options</h5>

                    <button
                      id="highValAcc"
                      type="submit"
                      className="btn btn-outline-primary"
                    >
                      Highest Value Account
                    </button>
                    <button
                      id="lowValAcc"
                      type="submit"
                      className="btn btn-outline-primary"
                    >
                      Lowest Value Account
                    </button>
                    <button
                      id="totBalSummary"
                      type="submit"
                      className="btn btn-outline-primary"
                    >
                      Total Account Balance
                    </button>
                    <hr></hr>
                  </div>
                  <div id="messageArea">
                    <h5 className="panelTitle text-center">Message Area</h5>
                    <p id="resultDisplay"></p>
                    <p id="errorDisplay" className="error"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountComp;

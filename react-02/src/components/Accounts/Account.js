import React from "react";
import "./Account.css";

class Account extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello From Accounts Component</h1>
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
                      placeholder="Enter Account Name"
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
                      placeholder="Enter Opening Balance"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <button
                      id="newAccount"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Create New Account
                    </button>
                  </div>
                </div>
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

export default Account;

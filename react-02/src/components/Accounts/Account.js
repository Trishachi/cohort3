import React from "react";
import "./Account.css";
import CreateAccForm from "./CreateAccForm";
import { Account, AccountController } from "./accountFunctions";

class AccountComp extends React.Component {
  constructor(props) {
    super(props);
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
                <CreateAccForm />
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

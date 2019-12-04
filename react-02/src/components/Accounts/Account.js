import React from "react";
import "./Account.css";
import CreateAccForm from "./CreateAccForm";
import AccDisplays from "./AccDisplays";
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
                <AccDisplays />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountComp;

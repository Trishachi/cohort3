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
                <h4 class="panelTitle">Account Summary</h4>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;

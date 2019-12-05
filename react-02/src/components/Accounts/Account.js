import React from "react";
import "./Account.css";
import CreateAccForm from "./CreateAccForm";
import AccDisplays from "./AccDisplays";
import { AccountController } from "./accountFunctions";

class AccountComp extends React.Component {
  constructor() {
    super();
    this.state = {
      highestAcc: 0,
      lowestAcc: 0,
      totalBalance: 0,
      errorMessage: " "
    };
    this.accountController = new AccountController();
  }

  addReactAccount = params => {
    const { accName, accBalance } = params;
    let nameArray = this.accountController.accountHolder;
    let accNames = nameArray.map(item => item.accountName);
    let nameExists = accNames.includes(accName);
    // console.log(nameExists);

    if (accName === "" || nameExists == true) {
      this.setState({
        errorMessage: "Please enter a unique name for your account"
      });
    } else {
      this.accountController.addAccount(accName, Number(accBalance));
      console.log(this.accountController.accountHolder);
      this.updateAccounts();
      this.setState({
        errorMessage: ""
      });
    }
  };

  updateAccounts = () => {
    if (this.accountController.accountHolder.length < 1) {
      this.setState({ highestAcc: 0, lowestAcc: 0, totalBalance: 0 });
      return;
    }
    const highestAccountUpdate = this.accountController.highestValAcc(
      this.accountController.accountHolder
    );
    const lowestAccountUpdate = this.accountController.lowestValAcc(
      this.accountController.accountHolder
    );
    const totalBalanceUpdate = this.accountController.totalAccBalance(
      this.accountController.accountHolder
    );
    this.setState({
      highestAcc: highestAccountUpdate,
      lowestAcc: lowestAccountUpdate,
      totalBalance: totalBalanceUpdate
    });
    document.getElementById("accOptions").classList.add("unhide");
  };

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
                <CreateAccForm onSubmit={this.addReactAccount} />
                <hr></hr>
                <AccDisplays
                  highestVAcc={this.state.highestAcc}
                  lowestVAcc={this.state.lowestAcc}
                  netWorth={this.state.totalBalance}
                  message={this.state.errorMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountComp;

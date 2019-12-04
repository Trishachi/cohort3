import React from "react";
import "./Account.css";

function AccDisplays(props) {
  return (
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
  );
}

export default AccDisplays;

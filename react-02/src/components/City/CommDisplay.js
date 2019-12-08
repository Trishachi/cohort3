import React, { Fragment } from "react";
import "../Accounts/Account.css";
import "./City.css";

function CommDisplay(props) {
  return (
    <div>
      <div id="commOptions" className="">
        <h5 className="panelTitle text-center">Community Details</h5>

        <label className="commDetailsLabel">Most Northern City:</label>
        <span id="mostNorth" className="commDetailsValue"></span>
        <br />
        <label className="commDetailsLabel">Most Southern City:</label>
        <span id="mostSouth" className="commDetailsValue"></span>
        <br />
        <label className="commDetailsLabel">Total Population:</label>
        <span id="totalPopulation" className="commDetailsValue"></span>
      </div>
    </div>
  );
}

export default CommDisplay;

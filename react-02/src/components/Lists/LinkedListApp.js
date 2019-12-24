import React, { Fragment } from "react";
// import "../Accounts/Account.css";
import "./LinkedList.css";

import { LinkedList } from "./LinkedListFunctions.js";

function LinkedListApp() {
  return (
    <Fragment>
      <h1 className="spacer">Welcome to Linked List App</h1>
      <div id="wrapper" className="container">
        <div className="row row-grid">
          <div id="leftPanel" className="col-md-12">
            <h4 className="panelTitle">Linked List Control</h4>
            <hr />
            <form>
              <div className="form-group row">
                <label htmlFor="subject" className="col-sm-4 col-form-label">
                  Subject:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="amount" className="col-sm-4 col-form-label">
                  Amount:
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="Enter an Amount"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4"></label>
                <div className="col-sm-8 left-align">
                  <button id="insert" type="submit" className="btn btn-primary">
                    Insert
                  </button>
                  <button id="delete" type="submit" className="btn btn-primary">
                    Delete
                  </button>
                </div>
              </div>
            </form>
            <hr />
            <h4 className="panelTitle">Linked List Display</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LinkedListApp;

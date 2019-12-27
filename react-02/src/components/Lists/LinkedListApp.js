import React, { Fragment, useState } from "react";
// import "../Accounts/Account.css";
import "./LinkedList.css";
import { LinkedList } from "./LinkedListFunctions.js";

const myLinkedList = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");

  // const [current, setCurrent] = useState("");
  // const [userInput, setUserInput] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     subject: "",
  //     amount: ""
  //   }
  // );

  // const handleOnChange = event => {
  //   const name = event.target.name;
  //   const newValue = event.target.value;
  //   setUserInput({ [name]: newValue });
  // };

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  // Methods to Implement

  //Handle Insert Button
  const handleInsert = event => {
    event.preventDefault();
    console.log("Insert Button Clicked");
    myLinkedList.insert(subject, amount);
    setSubject("");
    setAmount("");
    console.log(myLinkedList);
  };

  //Handle on Enter Event

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleInsert();
    }
  };
  //Handle Delete Button

  //Handle First Button
  //Handle Last Button
  //Handle Previous Button
  //Handle Node Buttton

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
                    value={subject}
                    onChange={handleSubjectChange}
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
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4"></label>
                <div className="col-sm-8 left-align">
                  <button
                    onClick={handleInsert}
                    onKeyPress={handleEnter}
                    id="insert"
                    type="submit"
                    className="btn btn-primary"
                  >
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
};

export default LinkedListApp;

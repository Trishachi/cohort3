import React, { Fragment, useState } from "react";
import "../Accounts/Account.css";
import "./LinkedList.css";
import { LinkedList } from "./LinkedListFunctions.js";

const myLinkedList = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  // Methods to Implement

  //Handle Insert Button
  const handleInsert = event => {
    console.log("Insert Button Clicked");
    myLinkedList.insert(subject, amount);
    setSubject("");
    setAmount("");
    setCurrent(myLinkedList.current);
    console.log(myLinkedList);
  };

  //Handle on Enter Event
  const handleEnter = event => {
    if (event.keyCode === 13) {
      // event.preventDefault();
      handleInsert();
    }
  };

  //Handle Delete Button
  const handleDelete = () => {
    console.log("Delete Button Clicked");
    myLinkedList.delete();
    setCurrent(myLinkedList.current);
    console.log(myLinkedList);
  };
  //Handle First Button
  //Handle Last Button
  //Handle Previous Button
  //Handle Node Buttton
  // let currentNode = myLinkedList.current;
  return (
    <Fragment>
      <h1 className="spacer">Welcome to Linked List App</h1>
      <div id="wrapper" className="container">
        <div className="row row-grid">
          <div id="leftPanel" className="col-md-12">
            <h4 className="panelTitle">Linked List Control</h4>
            <hr />
            <div id="form">
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
                  <button
                    onClick={handleDelete}
                    id="delete"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div id="currentNodeDisplay">
              <h4 className="panelTitle">Linked List Display</h4>
              <p>
                Current Node: Subject: {current.subject} and Amount:{" "}
                {current.amount}{" "}
              </p>

              <button id="first" className="btn btn-primary">
                <b>{"<<"}</b>
              </button>
              <button id="prev" className="btn btn-primary">
                <b>{"<"}</b>
              </button>
              <button id="next" className="btn btn-primary">
                <b>{">"}</b>
              </button>
              <button id="last" className="btn btn-primary">
                <b>{">>"}</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LinkedListApp;

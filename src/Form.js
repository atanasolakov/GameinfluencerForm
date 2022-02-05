import React, { useState } from "react";
import "./index.css";
const Form = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredDescription, setDescription] = useState("");
  const [enteredGame, setGame] = useState("");
  const [enteredCrypto, setCrypto] = useState("");
  const [enteredBudget, setBudget] = useState("");
  const [enteredLanguage, setLanguage] = useState("");
  const [enteredStartDate, setStartDate] = useState("");
  const [eneteredEndDate, setEndDate] = useState("");
  var otherOption = "";
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const budgetChangeHandler = (e) => {
    setBudget(e.target.value);
  };
  const gameChangeHandler = (e) => {
    if (e.target.value === "other") {
      document.getElementById("othertext").type = "text";
      otherOption = document.getElementById("hop").value;
    } else {
      document.getElementById("othertext").type = "hidden";
      setGame(e.target.value);
    }
  };
  const cryptoChangeHandler = (e) => {
    setCrypto(e.target.value);
  };
  const languageChangeHandler = (e) => {
    setLanguage(e.target.value);
  };
  const startDateChangeHandler = (e) => {
    if (otherOption !== "") {
      document.getElementById("hop").value =
        document.getElementById("othertext").value;
      setGame(document.getElementById("hop").value);
    }
    setStartDate(e.target.value);
  };
  const endDateChangeHandler = (e) => {
    setEndDate(e.target.value);
  };

  const submitHandler = (e) => {
    const formData = {
      name: enteredName,
      description: enteredDescription,
      game: enteredGame,
      budget: enteredBudget,
      crypto: enteredCrypto,
      language: enteredLanguage,
      startDate: enteredStartDate,
      endDate: eneteredEndDate,
    };
    props.onSaveData(formData);
    e.preventDefault(e);
    // setName("");
    // setCrypto("");
    // setLanguage("");
    // setGame("");
    // setDescription("");
    // setStartDate("");
    // setEndDate("");
  };
  return (
    <div className="regform">
      <form onSubmit={submitHandler}>
        <div>
          <div className="userdetails">
            <label className="details">Campaign Name</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              placeholder="Enter name"
            ></input>
          </div>
          <div className="inputbox">
            <label>Description</label>
            <textarea
              placeholder="Describe your campaign"
              cols="5"
              rows="5"
              maxLength="200"
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
          <div className="inputbox">
            <label className="details">Campaign Game</label>
            <select onChange={gameChangeHandler} className="select">
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="League of Legends">League of Legends</option>
              <option value="Apex">Apex</option>
              <option value="Dota 2">Dota2</option>
              <option value="Fortnite">Fortnite</option>
              <option value="MineCraft">MineCraft</option>
              <option id="hop" value="other">
                Other
              </option>
            </select>
          </div>
          <div>
            <input type="hidden" id="othertext" placeholder="Game name"></input>
          </div>
          <div className="inputbox">
            <label className="details">Campaign Budget</label>
            <input
              placeholder="Enter budget in dollars"
              type="number"
              min="2000"
              max="10000"
              step="100"
              onChange={budgetChangeHandler}
            ></input>
          </div>
          <div className="inputbox">
            <label details>Can be paid in Crypto</label>
            <select onChange={cryptoChangeHandler} className="select1">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputbox">
            <label className="details">Select Language</label>
            <select onChange={languageChangeHandler} className="select2">
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="Japanese">Japanese</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div className="inputbox">
            <label className="details">When does it start</label>
            <input
              type="date"
              min="2022-02-01"
              max="2023-02-01"
              onChange={startDateChangeHandler}
            ></input>
          </div>
          <div className="inputbox">
            <label className="details">End Date</label>
            <input
              type="date"
              min="2023-02-01"
              max="2024-02-01"
              onChange={endDateChangeHandler}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn">
              Add Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const score = (event) => {
    if (event.target === document.querySelector(".homeButtons__touchdown")) {
      setHomeScore(homeScore + 7);
    } else if (
      event.target === document.querySelector(".homeButtons__fieldGoal")
    ) {
      setHomeScore(homeScore + 3);
    } else if (
      event.target === document.querySelector(".awayButtons__touchdown")
    ) {
      setAwayScore(awayScore + 7);
    } else if (
      event.target === document.querySelector(".awayButtons__fieldGoal")
    ) {
      setAwayScore(awayScore + 3);
    }
  };

  const quarter = () => {
    const qCounter = document.querySelector(".quarter__value");
    if (qCounter.textContent === "1") {
      qCounter.textContent = "2";
    } else if (qCounter.textContent === "2") {
      qCounter.textContent = "3";
    } else if (qCounter.textContent === "3") {
      qCounter.textContent = "4";
    } else if (qCounter.textContent === "4") {
      qCounter.textContent = "1";
    }
  };

  const down = () => {
    const dCounter = document.querySelector(".down__value");
    if (dCounter.textContent === "1") {
      dCounter.textContent = "2";
    } else if (dCounter.textContent === "2") {
      dCounter.textContent = "3";
    } else if (dCounter.textContent === "3") {
      dCounter.textContent = "4";
    } else if (dCounter.textContent === "4") {
      dCounter.textContent = "1";
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <button onClick={down}>Change Down</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={score}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={score}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={score}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={score}>
            Away Field Goal
          </button>
        </div>
        <button onClick={quarter}>Change Quarter</button>
      </section>
    </div>
  );
}

export default App;

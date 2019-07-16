//TODO: STEP 1 - Import the useState hook.
import React, {useState}  from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [touchDown, setTouchdown] = useState(7);
const [fieldGoal, setfieldGoal] = useState(3);

  return (
    <div onClick={setHomeScore(false)} className="App">
      {homeScore === false ? <button={touchdown} /> : <button={fieldGoal} />}
    </div>
  );
}
    

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
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button onclick={ () => homeScore(homeScore + setTouchdown)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ ()=> homeScore(homeScore + setfieldGoal)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button  onClick={() => setAwayScore(awayScore + settouchDown)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore + setfieldGoal)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  

export default App;

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
    <div onClick={() => setHomeScore(!homestore)} className="App">
    {homestore === false ? <div={} /> : <h2={yellow} />}
  </div>
);
}

    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
         
    
            <div className="home__score">32</div>
            </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">32</div>
          </div>
        </div>
        
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setAwayScore(settouchdown)}>Touchdown Away</button>
          <button onClick={ ()=> setHomeScore(setfieldGoal) } className="App">
<div onClick={ setLightOn(false) } className="App">
<button onClick={ () => setAwayScore(awayScore)} className="App"></button>
<button onClick={ ()=> setTouchdown(false) } className="homeButtons__touchdown"></button>
<button onClick={ ()=> setfieldGoal(true) } className="awayButtons__fieldGoal"></button>
<button onClick={ ()=> setHomeScore(!homeScore) } className="App"></button>
<button onClick={ () => setHomeScore(touchDown)}className="App"</button>
  <button onClick={() => setAwayScore(fieldGoal)}>FieldGoal Away</button>
  <button onClick={() => setAwayScore(setTouchdown)}>Set Touchdown Away</button>
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

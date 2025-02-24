import React, { useState } from "react";
import "./App.css";


function BottomRow(){

  const [quarter, quarterScore] = useState(0);
  console.log(useState(0));

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">8</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">8</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <button className="quarter__value" onClick = {() => quarterScore(quarter + 1)}>{quarter}</button>
      </div>
    </div>
  );
}

export default BottomRow;

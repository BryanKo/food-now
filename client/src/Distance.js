import React, { Component } from "react";
// import DistanceOption from "./DistanceOption";

class Distance extends Component {
  render() {
    return (
      <div>
        <h2>2. How far are you willing to travel?</h2>
        <div className="distance-content">
          <div>
            <div className="distanceLogo" id="driving"></div>
            <label>Driving (>5 mi.)<input type="radio" onClick={setDist} id="8000" value="8000" name="distance"/></label>
          </div>
          <div>
            <div className="distanceLogo" id="biking"></div>
            <label>Biking (2 mi.)<input type="radio" onClick={setDist} id="8000" value="8000" name="distance"/></label>
          </div>
          <div>
            <div className="distanceLogo" id="walking"></div>
            <label>Walking (1 mi.)<input type="radio" onClick={setDist} id="1600" value="1600" name="distance"/></label>
          </div>
          <div>
            <div className="distanceLogo" id="block"></div>
            <label>Within 4 blocks<input type="radio" onClick={setDist} id="800" value="800" name="distance"/></label>
          </div>
          <div>
            <div className="distanceLogo" id="delivery"></div>
            <label>Delivery (fat ass)<input type="radio" onClick={setDist} id="40000" value="40000" name="distance"/></label>
          </div>
          {
            /* JOSH/JASPER'S OLD OPTIONS
            <DistanceOption content="Driving (>5 mi.)" onclick={setDist}></DistanceOption>
            <DistanceOption content="Biking (2 mi.)" onclick={setDist}></DistanceOption>
            <DistanceOption content="Walking (1 mi.)" onclick={setDist}></DistanceOption>
            <DistanceOption content="Within 4 blocks" onclick={setDist}></DistanceOption>
            <DistanceOption content="Delivery (fat ass)" onclick={setDist}></DistanceOption>
            */
          }
        </div>
        {/* <NavLink to="/cost">
          <button id="next" type="button">Next</button>
        </NavLink> */}
      </div>
    );
  }
}

// Sets user's radius parameter
function setDist(radio) {
  console.log(radio.target.id);
  sessionStorage.setItem('radius', radio.target.id);
}

export default Distance;

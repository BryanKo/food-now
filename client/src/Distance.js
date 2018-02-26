import React, { Component } from "react";
import DistanceOption from "./DistanceOption";
class Distance extends Component {
  render() {
    return (
      <div>
        <h2>2. How far are you willing to travel?</h2>
        <div className="distance-content">
          <DistanceOption content="Driving (>5 mi.)"></DistanceOption>
          <DistanceOption content="Biking (2 mi.)"></DistanceOption>
          <DistanceOption content="Walking (1 mi.)"></DistanceOption>
          <DistanceOption content="Within 4 blocks"></DistanceOption>
          <DistanceOption content="Delivery (fat ass)"></DistanceOption>
        </div>
        {/* <NavLink to="/cost">
          <button id="next" type="button">Next</button>
        </NavLink> */}
      </div>
    );
  }
}

export default Distance;
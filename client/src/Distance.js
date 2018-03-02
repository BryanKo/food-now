import React, { Component } from "react";
import DistanceOption from "./DistanceOption";
class Distance extends Component {
  render() {
    return (
      <div>
        <h2>2. How far are you willing to travel?</h2>
        <div className="distance-content">
          <DistanceOption content="Driving (>5 mi.)" onclick={driving}></DistanceOption>
          <DistanceOption content="Biking (2 mi.)" onclick={biking}></DistanceOption>
          <DistanceOption content="Walking (1 mi.)" onclick={walking}></DistanceOption>
          <DistanceOption content="Within 4 blocks" onclick={corner}></DistanceOption>
          <DistanceOption content="Delivery (fat ass)" onclick={delivery}></DistanceOption>
        </div>
        {/* <NavLink to="/cost">
          <button id="next" type="button">Next</button>
        </NavLink> */}
      </div>
    );
  }
}
function test(){
  console.log("test");
}
function driving(){
  console.log("'radius':40000")
}
function biking(){
  console.log("'radius':20000")
}
function walking(){
  console.log("'radius':10000")
}
function corner(){
  console.log("'radius':5000")
}
function delivery(){
  console.log("'radius':2500")
}
export default Distance;
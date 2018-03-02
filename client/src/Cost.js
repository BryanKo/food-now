import React, { Component } from "react";
class Cost extends Component {
  render() {
    return (
      <div>
        <h2>3. How much are you willing to spend?</h2>
        <form className="distance-content">
          <div>
            <input type="radio" name="costValue" value="$" onClick={onedolla}/> $
          </div>
          <div>
            <input type="radio" name="costValue" value="$$" onClick={twodolla}/> $$
          </div>
          <div>
            <input type="radio" name="costValue" value="$$$" onClick={threedolla}/> $$$
          </div>
          <div>
            <input type="radio" name="costValue" value="$$$$" onClick={fourdolla}/> $$$$
          </div>        
        </form>
      </div>
    );
  }
}
function onedolla(){
  console.log("'price':'1'")
}

function twodolla(){
  console.log("'price':'2'")
}

function threedolla(){
  console.log("'price':'3'")
}

function fourdolla(){
  console.log("'price':'4'")
}
export default Cost;
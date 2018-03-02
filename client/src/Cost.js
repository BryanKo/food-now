import React, { Component } from "react";
class Cost extends Component {
  render() {
    return (
      <div>
        <h2>3. How much are you willing to spend?</h2>
        <form className="distance-content">
          <div>
            <input type="radio" id="1" name="costValue" value="$" onClick={setPrice}/> $
          </div>
          <div>
            <input type="radio" id="1,2" name="costValue" value="$$" onClick={setPrice}/> $$
          </div>
          <div>
            <input type="radio" id="1,2,3" name="costValue" value="$$$" onClick={setPrice}/> $$$
          </div>
          <div>
            <input type="radio" id="1,2,3,4" name="costValue" value="$$$$" onClick={setPrice}/> $$$$
          </div>
        </form>
      </div>
    );
  }
}

// Sets user's price parameter
function setPrice(radio) {
  console.log(radio.target.id);
  localStorage.setItem('price', radio.target.id);
}

export default Cost;

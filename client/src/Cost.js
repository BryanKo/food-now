import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Cost extends Component {
  render() {
    return (
      <div>
        <h2>3. How much are you willing to spend?</h2>
        <form className="distance-content">
          <div>
            <input type="radio" name="costValue" value="$"/> $
          </div>
          <div>
            <input type="radio" name="costValue" value="$$"/> $$
          </div>
          <div>
            <input type="radio" name="costValue" value="$$$"/> $$$
          </div>
          <div>
            <input type="radio" name="costValue" value="$$$$"/> $$$$
          </div>        
        </form>
      </div>
    );
  }
}

export default Cost;
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Distance extends Component {
  render() {
    return (
      <div>
        <h2>3. How far are you willing to travel?</h2>
        <NavLink to="/cost">
          <button id="next" type="button">Next</button>
        </NavLink>
      </div>
    );
  }
}

export default Distance;
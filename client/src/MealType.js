import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class MealType extends Component {
  render() {
    return (
      <div>
        <h2>2. How hungry are you?</h2>
        <NavLink to="/distance">
          <button id="next" type="button">Next</button>
        </NavLink>
      </div>
    );
  }
}

export default MealType;
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Rating extends Component {
  render() {
    return (
      <div>
        <h2>5. How great of a place do you want?</h2>
        {/* <NavLink to="/rating">
          <button id="next" type="button">Next</button>
        </NavLink> */}
      </div>
    );
  }
}

export default Rating;
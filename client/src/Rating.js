import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Rating extends Component {
  render() {
    return (
      <div>
        <h2>4. How great of a place do you want?</h2>
          <div className="distance-content">
            <div>
              <input type="radio" name="ratingValue" value="*"/> *
            </div>
            <div>
              <input type="radio" name="ratingValue" value="**"/> **
            </div>
            <div>
              <input type="radio" name="ratingValue" value="***"/> ***
            </div>
            <div>
              <input type="radio" name="ratingValue" value="****"/> ****
            </div>
            <div>
              <input type="radio" name="ratingValue" value="*****"/> *****
            </div>
          </div>
      </div>
    );
  }
}

export default Rating;
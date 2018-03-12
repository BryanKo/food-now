import React, { Component } from "react";
class Rating extends Component {
  render() {
    return (
      <div>
        <h2>4. How great of a place do you want?</h2>
          <div className="distance-content">
            <div>
            <i className="fas fa-star fa-2x red"></i><input type="radio" name="ratingValue" value="*"/>
            </div>
            <div>
            <i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><input type="radio" name="ratingValue" value="**"/>
            </div>
            <div>
            <i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><input type="radio" name="ratingValue" value="***"/>
            </div>
            <div>
            <i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><input type="radio" name="ratingValue" value="****"/>
            </div>
            <div>
            <i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><i className="fas fa-star fa-2x red"></i><input type="radio" name="ratingValue" value="*****"/>
            </div>
            {/* <div className="rate">
              <input type="radio" name="rating" /><label htmlFor="****" id="1,2,3,4">
              </label>
              <input type="radio" name="rating"  /><label htmlFor="***" id="1,2,3">
              </label>
              <input type="radio" name="rating"  /><label htmlFor="**" id="1,2">
              </label>
              <input type="radio" name="rating"  /><label htmlFor="*" id="1">
              </label>
            </div> */}
          </div>
      </div>
    );
  }
}

export default Rating;
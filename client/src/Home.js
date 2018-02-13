import React, { Component } from "react";
import{
    NavLink
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <div className="body-text">Welcome to Food Now! Where our goal is to get you food, now.</div>

        <NavLink to="/category">
            <button id="next" type="button">Next</button>
        </NavLink>
      </div>
    );
  }
}

export default Home;
import React, { Component } from "react";
class Cost extends Component {
  render() {
    return (
      <div>
        <h2>3. How much are you willing to spend?</h2>
        <form className="distance-content">
          <div>
          <i className="fas fa-dollar-sign fa-2x monay"></i><input type="radio" id="1" name="costValue" value="$" onClick={setPrice}/>
          </div>
          <div>
          <i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><input type="radio" id="1,2" name="costValue" value="$$" onClick={setPrice}/>
          </div>
          <div>
          <i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><input type="radio" id="1,2,3" name="costValue" value="$$$" onClick={setPrice}/>
          </div>
          <div>
          <i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><i className="fas fa-dollar-sign fa-2x monay"></i><input type="radio" id="1,2,3,4" name="costValue" value="$$$$" onClick={setPrice}/>
          </div>
          {/* <div className="cost">
            <label htmlFor="$$$$" onClick={setPrice} id="1,2,3,4"><input type="radio" name="dollar" />
            </label>
            <label htmlFor="$$$" onClick={setPrice} id="1,2,3"><input type="radio" name="dollar"  />
            </label>
            <label htmlFor="$$" onClick={setPrice} id="1,2"><input type="radio" name="dollar"  />
            </label>
            <label htmlFor="$" id="1" onClick={setPrice}><input type="radio" name="dollar"  />
            </label>
          </div> */}

        </form>
      </div>
    );
  }
}

// Sets user's price parameter
function setPrice(radio) {
  console.log(radio.target.id);
  sessionStorage.setItem('price', radio.target.id);
}

export default Cost;

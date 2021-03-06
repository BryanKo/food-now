import React, { Component } from "react";

class DistanceOption extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({selected: !this.state.selected});
  }
  render() {
    return (
        <label>{this.props.content}<input type="radio" name="distance" onClick={this.props.onclick}/></label>
    );
  }
}


export default DistanceOption;
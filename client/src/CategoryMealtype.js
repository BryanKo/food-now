import React, { Component } from "react";

class CategoryMealtype extends Component {
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
        <div onClick={this.props.onClick} name={this.props.name}>{this.props.content}</div>
    );
  }
}

export default CategoryMealtype;
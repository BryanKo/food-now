import React, { Component } from "react";

class Button extends Component{
    render(){
        return(
            <button onClick={this.submitAll.bind(this)}>BACK END WUZ HERE</button>
        );
    }

    submitAll() {
        console.log(JSON.parse(localStorage.getItem('item')));
    }
}
export default Button;

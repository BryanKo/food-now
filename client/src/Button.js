import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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

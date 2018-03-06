import React, { Component } from "react";
import axios from 'axios';

class Button extends Component{
    render(){
        return(
            <button onClick={this.submitAll.bind(this)}>Food Now!</button>
        );
    }

    submitAll() {
        // Compile all parameters into JSON object
        var search = {
          term: localStorage.getItem('term'),
          radius: localStorage.getItem('radius'),
          price: localStorage.getItem('price')
        };
        console.log(search);

        axios.get('http://localhost:8080/yelpInput', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'applications/json',
          },
          params: {
            term: localStorage.getItem('term'),
            radius: localStorage.getItem('radius'),
            price: localStorage.getItem('price')
          }
        }).then(function(response) {
            console.log(response.data);
            localStorage.setItem('item', JSON.stringify(response.data));
          }).catch(function(response) {
            console.log('error:');
            console.log(response);
          });
    }
}
export default Button;

import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
//require ('react-responsive-carousel/lib/styles/carousel.css');
import burger from './images/burger.jpg';
import nachos from './images/nachos.jpg';
import chinese from './images/chinese.jpg';
import axios from 'axios';

class Category extends Component {
  render() {
    return (
      <div>
        <h2>1. Choose a category! -- add as many as you want!</h2>
        <div className="foodChoice">
          <div className="foodCarousel">
            <Carousel showArrows={true} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} dynamicHeight={true} onClickItem={click}>
                <div>
                    <img src={burger} alt="burger"/>
                    <p className="legend">American</p>
                </div>
                <div>
                    <img src={chinese} alt="chinese"/>
                    <p className="legend">Chinese</p>
                </div>
                <div>
                    <img src={nachos} alt="nachos"/>
                    <p className="legend">Mexican</p>
                </div>
            </Carousel>
          </div>
          <form>
            <input type="text" id="uiCat" placeholder="Search..."/>
	    {/* <NavLink to="/Mealtype">
              <input type="submit" id="next" onClick={this.myfunction.bind(this)} value="Submit"/>
	    </NavLink> */}
          </form>
        </div>
      </div>
    );
  }

  myfunction () { 
    var language =document.getElementById("uiCat").value;
    console.log(language);
    // console.log("hello");
    axios.get('http://localhost:8080/yelpInput', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'applications/json',

      },
      params: {
        term: language
      }
    })
      .then(function(response) {
        console.log(response.data);
      }).catch(function(response) {
        console.log('error:');
        console.log(response);
      });
  }
}

function click(){
  console.log("test");
}

export default Category;
